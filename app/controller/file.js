/**
 * Created by sirius on 2017/4/25.
 */
'use strict';
const path = require('path');
const sendToWormhole = require('stream-wormhole');

module.exports = app => {
    class FileController extends app.Controller {
        * upload() {
            const stream = yield this.ctx.getFileStream();
            let result;
            //写入磁盘
            try {
                result = yield this.ctx.service.file.saveToDisk(stream, '/tmp/' + path.basename(stream.filename));
            } catch (err) {
                // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
                yield sendToWormhole(stream);
                throw err;
            }
            //存入数据库
            let fields = stream.fields;//获取所有表格字段
            let sqlResult = yield this.ctx.service.file.saveToDB(result.path, fields.type, fields.description);
            let data;
            if (sqlResult.affectedRows == 1) {//存储成功，记录到session
                this.ctx.session.fileId = sqlResult.insertId;
                data = {
                    menu: {
                        name: 'upload'
                    },
                    uploaded: true
                };
                yield this.ctx.render('upload.ejs', data);
            } else {
                this.ctx.status = 500;
                data = {
                    status: 500
                };
                yield this.ctx.render('error.ejs', data);
            }
        }
    }
    return FileController;
};

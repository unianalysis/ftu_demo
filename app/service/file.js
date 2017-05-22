/**
 * Created by sirius on 2017/4/25.
 */
const fs = require("fs");
module.exports = app => {
    class File extends app.Service {
        * saveToDB(filepath, type, description) {
            const result = yield app.mysql.insert("ftu_files", {
                filepath: filepath,
                type: type,
                description: description,
                created_at: app.mysql.literals.now
            });
            return result;
        }

        * saveToDisk(stream, path) {//文件流写入到磁盘文件
            let writeStream = fs.createWriteStream(path);
            return stream.pipe(writeStream);
        }
    }
    return File;
};

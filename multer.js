const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      //어디에 어떤 이름으로 저장할지
      done(null, "upload/");
    },
    filename(req, file, done) {
      //req는 매개변수 요청에 대한 정보, file에는 업로드한 파일에 대한 정보, done 은 함수
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명  + 현재시간.확장자 형태로 업로드
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, //업로드 제한 사항
});

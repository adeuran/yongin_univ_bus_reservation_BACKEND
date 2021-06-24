module.exports = {
    // 서버에 발생한 오류를 양식에 맞게 출력합니다.
    // 오류에는 1~3단계가 있으며 숫자가 클수록 중요한 메세지입니다.
    // 1 - 개발용, 2 - 일반적 오류, 3 - 중대한 문제
    serverError(position, message, error, level) {
        console.log("SERVER ERROR OCCURRENCE!");
        console.log("POSITION: ", position);
        if (message) console.log("MESSAGE: ", message);
        console.log("ERROR: ",error)
    }
}
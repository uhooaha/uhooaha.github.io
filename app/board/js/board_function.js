// HTML 문서가 완전히 로드된 후 스크립트를 실행합니다.
document.addEventListener('DOMContentLoaded', function() {
    // HTML에서 폼 요소를 가져옵니다.
    const form = document.getElementById('createBoardForm');
    // HTML에서 메시지를 표시할 요소를 가져옵니다.
    const messageElement = document.getElementById('message');

    // 폼 제출(submit) 이벤트를 감지합니다.
    form.addEventListener('submit', async (e) => {
        e.preventDefault(); // 기본 폼 제출 동작(페이지 새로고침)을 막습니다.

        const boardTitle = form.boardTitle.value; // 입력된 게시판 제목을 가져옵니다.

        if (!boardTitle) {
            messageElement.textContent = '게시판 제목을 입력해주세요.';
            return;
        }

        try {
            // Firestore에 'boards' 컬렉션을 참조하고, 새 문서를 추가합니다.
            await firebase.firestore().collection('boards').add({
                title: boardTitle,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });

            messageElement.textContent = '게시판이 성공적으로 생성되었습니다!';
            form.reset(); // 폼 입력란을 초기화합니다.
        } catch (error) {
            console.error("게시판 생성 오류: ", error);
            messageElement.textContent = '게시판 생성에 실패했습니다. 다시 시도해주세요.';
        }
    });
});
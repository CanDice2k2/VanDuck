// Câu hỏi trong nhóm 1 (Lựa chọn đúng/sai)
let group1Questions = [
    "Câu hỏi 1",
    "Câu hỏi 2",
    // Thêm các câu hỏi khác tại đây
];

// Câu hỏi trong nhóm 2 (Chọn 1 trong 4 đáp án)
let group2Questions = [
    "Câu hỏi 1",
    "Câu hỏi 2",
    // Thêm các câu hỏi khác tại đây
];

// Câu hỏi trong nhóm 3 (Chọn nhiều đáp án)
let group3Questions = [
    "Câu hỏi 1",
    "Câu hỏi 2",
    // Thêm các câu hỏi khác tại đây
];

// Câu hỏi trong nhóm 4 (Trả lời tự luận)
let group4Questions = [
    "Câu hỏi 1",
    "Câu hỏi 2",
    // Thêm các câu hỏi khác tại đây
];

// Hàm thêm câu hỏi vào trang web
function addQuestionsToPage(group, questions) {
    let groupElement = document.getElementById(group);
    questions.forEach((question, index) => {
        groupElement.innerHTML += `<div class="question">${index + 1}. ${question}</div>`;
    });
}

// Thêm câu hỏi vào từng nhóm
addQuestionsToPage("group1", group1Questions);
addQuestionsToPage("group2", group2Questions);
addQuestionsToPage("group3", group3Questions);
addQuestionsToPage("group4", group4Questions);

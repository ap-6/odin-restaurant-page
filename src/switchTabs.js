const content = document.getElementById('content');

function switchTab(loadTab) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }

    loadTab();
}

export default switchTab;
function update() {
    postMessage(1);
    setTimeout("update()",1000);
}
update();

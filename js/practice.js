function order_info() {
    var name = document.getElementById('order_name').value;
    var num = document.getElementById('order_num').value;
    var mail = document.getElementById('order_mail').value;
    
    alert(name + '\n您好！謝謝您對我們的衣服有興趣！以下是您的訂購資訊\n電話：'+num+'\nEmail：'+mail+'\n\n感謝您的訂購！');
}
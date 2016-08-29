(function (doc, win) {
    var docEl = doc.documentElement,
        clientWidth = null,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            clientWidth = docEl.clientWidth;
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        };
    recalc();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);


// JavaScript Document
$(function () {
    $("#applyButton").click(function () {
        applyQuiz();
    });
});

/**
 *
 **/
function applyQuiz(type) {
    if ($("#gold_quantity").val() == '' || $("#gold_quantity").val() == '金牌数') {
        layer.alert('请输入中国金牌数！', 8);
        //layer.tips('请输入中国金牌数！', "#gold_quantity", {tips: 1});
        $("#gold_quantity").focus();
        return false;
    }

    if ($("#silver_quantity").val() == '' || $("#silver_quantity").val() == '银牌数') {
        layer.alert('请输入中国银牌数！', 8);
        //layer.tips('请输入中国金牌数！', "#gold_quantity", {tips: 1});
        $("#silver_quantity").focus();
        return false;
    }

    if ($("#bronze_quantity").val() == '' || $("#bronze_quantity").val() == '铜牌数') {
        layer.alert('请输入中国铜牌数！', 8);
        //layer.tips('请输入中国金牌数！', "#gold_quantity", {tips: 1});
        $("#bronze_quantity").focus();
        return false;
    }

    if ($("#brazil_quantity").val() == '' || $("#brazil_quantity").val() == '巴西总牌数') {
        layer.alert('请输入巴西总牌数！', 8);
        //layer.tips('请输入中国金牌数！', "#gold_quantity", {tips: 1});
        $("#brazil_quantity").focus();
        return false;
    }

    if ($("#wx_account").val() == '' || $("#wx_account").val() == '请输入微信号') {
        layer.alert('请输入微信号！', 8);
        //layer.tips('请输入微信号！', "#wx_account", {tips: 1});
        $("#wx_account").focus();
        return false;
    }

    if ($("#mobile").val() == '' || $("#mobile").val() == '请输入手机号') {
        layer.alert('请输入手机号！', 8);
        //layer.tips('请输入手机号！', "#mobile", {tips: 1});
        $("#mobile").focus();
        return false;
    }

    var loading = layer.load('正在加载数据...', 0);
    $.ajax({
        url: 'http://www.minioil.cn/api/zwOlympicQuiz.php',
        type: 'post',
        data: decodeURIComponent($('#applyQuizForm').serialize(), true),
        dataType: 'json', // 接受数据格式
        error: function (json) {
        },
        async: true,// 异步加载
        beforeSend: function () {
        },
        success: function (json) {
            layer.close(loading); // 关闭加载层
            if (json == 'success') {
                //layer.msg("提交成功！", {icon: 6});

                // 清空数据
                $("#brazil_quantity").val('') ;
                $("#gold_quantity").val('') ;
                $("#silver_quantity").val('') ;
                $("#bronze_quantity").val('') ;

                $(".mark").show();
                $(".mark_content").slideDown("slow");
                $(".cha").click(function(){
                    $(".mark").hide();
                    $(".mark_content").hide();
                })
            } else {
                layer.msg("提交失败！", {icon: 2});
            }
        }
    });
}

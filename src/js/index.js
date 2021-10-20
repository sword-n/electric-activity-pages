$(function () {
  let RegExpObj = {
    name: {
      stringTip:'请输入姓名，支持中文、英文、数字等10个字符',
      regExp:/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
    },
    company: {
      stringTip:'请输入公司名称，不能超过30个字符',
      regExp:/^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
    },
    mobile: {
      stringTip:'请填写可以联系到您的手机号码(11位手机号)',
      regExp:/^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
    },
  }
  // 点击弹出
  $(".btn-blur").on("click", function (event) {
    $(".Background-Layer").addClass("blur");
    $(".Popup-Layer").removeClass("close");
    $(".login-panel").animate(
      {
        opacity: 1,
        top: 100,
      },
      200
    );
    event.stopPropagation();
  });
  // 点击关闭
  $(".btn-cancel,.closeBtn").on("click", function (event) {
    $(".Background-Layer").removeClass("blur");
    $(".Popup-Layer").addClass("close");
    $(".login-panel").animate(
      {
        opacity: 0,
        top: 0,
      },
      200
    );
    $("body").css("overflow", "");
    event.stopPropagation();
  });
  
  $("#formReport input").on('blur',function (e) {
    for (const i in RegExpObj) {
      const el = RegExpObj[i];
      if(i == e.target.name){
        if(el.regExp.test(e.target.value)){
          $(e.target).parent('.form-item').removeClass('error')
          $(e.target).parent('.form-item').children('.error-tips').html('')
        }else{
          $(e.target).parent('.form-item').addClass('error')
          $(e.target).parent('.form-item').children('.error-tips').html(el.stringTip)
        }
      }
    }
  })
  $(".btn-submit").click(() => {
    var data = {
      type: 1, // 售电
      name: $('[name="name"]').val(),
      company: $('[name="company"]').val(),
      mobile: $('[name="mobile"]').val(),
      remark: $('[name="remark"]').val(),
    };
    $('.form-item input').each((cur,item) => {
      $(item).focus()
      $(item).blur()
  })
    if($('.form-item.error').length !== 0){
      return false
    }else{
      $.ajax({
        type: "POST",
        url: "https://uniplat.jd.com/v1/contact/add",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(data),
        success: function (e) {
          console.log(e);
          if (e.code == "200") {
            alert("提交成功");
            $(".Popup-Layer").addClass("close");
          } else {
            alert(e.msg || "请求异常");
          }
        },
      });
    }

  });
 
});

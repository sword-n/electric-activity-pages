$(function () {
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

  $(".btn-submit").click(() => {
    var data = {
      type: 1, // 售电
      name: $('[name="name"]').val(),
      company: $('[name="company"]').val(),
      mobile: $('[name="mobile"]').val(),
      remark: $('[name="remark"]').val(),
    };

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
  });
  $(".btn-cancel").click((e) => {
    console.log(e);
    console.log("cancel");
    e.stopPropagation();
  });
  
  //
  
  // 背景层和弹出层
  // 点击弹出
  $('.btn-blur').on('click', function() {
  	$('.Background-Layer').addClass('blur');
  	$('.Popup-Layer').removeClass('close');
  	$('.login-panel').animate({
  		opacity: 1,
  		top: 100,
  		height: 600,
  		width: 1000
  	}, 500)
  	event.stopPropagation();
  	 
  });
  
  // 点击关闭
  $(".closeBtn").on('click', function() {
  	$('.Background-Layer').removeClass('blur');
  	$('.Popup-Layer').addClass('close');
  	$('.login-panel').animate({
  		opacity: 0,
  		top: 0,
  		height: 550,
  		width: 900
  	}, 10)
  	$('body').css('overflow', '')
  })
  $(".cancel").on('click', function() {
  	$('.Background-Layer').removeClass('blur');
  	$('.Popup-Layer').addClass('close');
  	$('.login-panel').animate({
  		opacity: 0,
  		top: 0,
  		height: 550,
  		width: 900
  	}, 10)
  	$('body').css('overflow', '')
  })
  // 姓名验证
  function name() {
  	$(".Signin-name").blur(function() {
  		$name = $(this).val();
  		if ($name.length == 0) {
  			$(".sinename").text("姓名不能为空").css("color", "#FB0729");
  			$(".Signin-name").css("border-color", "#FB0729" );
  		} else {
  			var reg = /^.{2,5}$/;
  			if (!reg.test($name)) {
  				$(".sinename").text("姓名格式不正确,请输入2-5个字符").css("color", "#FB0729");
  				$(".Signin-name").css("border-color", "#FB0729" );
  			} else {
  				$(".sinename").text("输入成功").css("color", "#43a047")
  				$(".Signin-name").css("backgroundColor", "#e6e6e6")
  				
  			}
  		}
  	})
  }
  //公司
  function gongsi() {
  	$(".Signin-gongsi").blur(function() {
  		$gongsi = $(this).val();
  		if ($gongsi.length == 0) {
  			$(".sinegongsi").text("公司不能为空").css("color", "#FB0729");
  			$(".Signin-gongsi").css("border-color", "#FB0729" );
  		} else {
  			var reg = /^.{1,30}$/;
  			if (!reg.test($gongsi)) {
  				$(".sinegongsi").text("公司名称格式不正确,请不要超出30个字符").css("color", "#FB0729");
  				$(".Signin-gongsi").css("border-color", "#FB0729" );
  			} else {
  				$(".sinename").text("输入成功").css("color", "#43a047")
  				$(".Signin-name").css("backgroundColor", "#e6e6e6")
  			}
  		}
  	})
  }
  //联系方式
  function phone() {
  	$(".Signin-phone").blur(function() {
  		$phone = $(this).val();
  		if ($phone.length == 0) {
  			$(".sinephone").text("联系方式不能为空").css("color", "#FB0729");
  			$(".Signin-phone").css("border-color", "#FB0729" );
  		} else {
  			var reg = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/;
  			if (!reg.test($phone)) {
  				$(".sinephone").text("联系方式格式不正确,请输入您的手机号").css("color", "#FB0729");
  				$(".Signin-phone").css("border-color", "#FB0729"  );
  			} else {
  				$(".sinename").text("输入成功").css("color", "#43a047")
  				$(".Signin-name").css("backgroundColor", "#e6e6e6")
  			}
  		}
  	})
  }
  
  
  //备注
  
  name();
  gongsi();
  phone();
  
  
  
  
  $Sincheckbox.click(function() {
  	if ($Sincheckbox.is(":checked")) {
  		$Sincp.css("backgroundColor", "#b9f6ca");
  		$("#submit").css("backgroundColor", "#4caf50")
  			.css("cursor", "pointer")
  	} else {
  		$Sincp.css("backgroundColor", "#ffff8d");
  		$("#submit").css("backgroundColor", "#f4f4f4")
  			.css("cursor", "")
  	}
  })
  
  $("#rebg").animate({
  	left: 250
  }, 2000)
  ssa = 1;
  
  $("#rebg").click(function() {
  	$(this).animate({
  		top: 200,
  		width: 200
  	})
  	$(this).animate({
  		top: 300,
  		width: 350
  	})
  })
  
  
});

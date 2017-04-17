$(function(){
	//兼容IE8
	$(".advantage .content li:first-child .img").css("background-position","0px 0px");
	$(".advantage .content li:nth-child(2) .img").css("background-position","-115px 0px");
	$(".advantage .content li:nth-child(3) .img").css("background-position","-230px 0px");
	$(".advantage .content li:last-child .img").css("background-position","-352px 0px");
	$(".advantage .content li:last-child").css("margin-right","0px");
	$(".partner .inner .cont a:last-child").css("margin-right","0px");
	//登录框js效果
	$(".windowDemo fieldset .row input").bind("input propertychange",function(){
		if($(this).val()!=""){
			$(this).parent().find("em").show();
		}else{
			$(this).parent().find("em").hide();
		}
		
	});
	$(".windowDemo fieldset .row em").click(function(){
		$(this).hide();
		$(this).parent().find('input').val("");
		$(this).parent().find('input').focus();
	});

	$(document).click(function(){
		$("#login_dialog").css("display","none");
		$("#register_dialog").css("display","none");
		$(".prepaid_success").css("display","none");
	});
	$(".header .right .login .sign_in").click(function(event){
		event.stopPropagation(); 
		$("#login_dialog").css("display","block");
	});
	$(".header .right .login .sign_up").click(function(event){
		event.stopPropagation(); 
		$("#register_dialog").css("display","block");
	});
	$("#login_dialog_content").click(function(event){
		event.stopPropagation(); 
	});
	$("#register_dialog_content").click(function(event){
		event.stopPropagation(); 
	});
	$("#login_dialog .close").click(function(){
		$("#login_dialog").css("display","none");
	});
	$("#register_dialog .close").click(function(){
		$("#register_dialog").css("display","none");
	});
	$(".goRegister").click(function(){
		$("#login_dialog").css("display","none");
		$("#register_dialog").css("display","block");
	});
	$(".goLogin").click(function(){
		$("#login_dialog").css("display","block");
		$("#register_dialog").css("display","none");
	});


	//用户信息编辑和保存切换效果
		$(".information .edit").click(function(){
			if($(this).html()=="收起"){
				$(this).parent().next(".infor_detail").hide();
				$(this).css("backgroundPosition","-156px -154px")
				$(this).html("编辑");
			}else if($(this).html()=="编辑"){
				$(this).parent().next(".infor_detail").show();
				$(this).css("backgroundPosition","-209px -154px")
				$(this).html("收起");
			}

		});
	//我的账户充值到余额还是购买松鼠币选择效果
	$("#container .demo .detail .btn button").focus(function(){
		$(this).addClass('cur').siblings('button').removeClass('cur');
	});
	$("#container .choice a").click(function(){
		$(this).addClass('cur').siblings('a').removeClass('cur');
	});
	//充值弹出框效果
	$("#container .prepaid .demo .detail .row .sub").click(function(event){
		event.stopPropagation(); 
		$(".prepaid_success").show();
	});
	$("#popup .inner").click(function(event){
		event.stopPropagation(); 
	});
	$("#popup .inner .close").click(function(){
		$(this).parent().parent().hide();
	});
})
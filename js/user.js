define(['reqmod/cookie','pm'],function (cookie,pm){
	var register = function () {
        console.log('register business start');
        var email,passWord,displayName;
        var image;
        if($('.register-user-password')[0].value!=$('.register-user-makeSure-password')[0].value)
        {
            pm.show('e',"两次密码不一致");
            return;
        }
        else{
            passWord = $('.regiester-user-makeSure-password')[0].value
        }
            email = $('.register-user-email')[0].value;
		
		  	displayName = $('.register-user-displayname')[0].value;
		  	
		//check value exist
        if(displayName == "" || passWord  == "" || email  == "")
        {
            pm.show('e',"请填入必要信息");return;
        }
        if(passWord.length < 6)
        {
            pm.show('e',"密码有点短");return;
        }
        var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if(!reg.test(email))
        {
            pm.show('e',"email 错误");return;
        }
        $.post('/register_action',
            JSON.stringify({
            	Email:email,
            	DisplayName:displayName,
				Picture:"none",		
				Password:passWord,				

			}),
            function(data, status)
            {
               	if(data.FeedbackCode == 0)
				{
					window.location="/";
					return;
				}
				else
				{
					pm.show('e','注册失败');
					return;
				}
            },
            "json"
        );

    }
});
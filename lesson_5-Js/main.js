$(document).ready(function(){
    
    var modal = document.getElementById('modal');
    var openModal = document.getElementById('openModal');
    var closeModal = document.getElementById('closeModal');
    var btnLogin = document.getElementById('btnLogin');

    openModal.addEventListener('click',function(){
        modal.style.display = 'flex';
    })
    closeModal.addEventListener('click',function(){
        modal.style.display = 'none';
    })
    
    
    btnLogin.addEventListener('click',function(){
        var userName = $('#username').val();
        var passWord = $('#password').val();
        $('.btn__label').hide();
        $('.loader').show();  
        if(userName == "admin" && passWord == "admin"){
               
            setTimeout(function(){
                $('.loader').hide();
                $('.btn__label').show();                  
                $('.modal').hide();
                $('.btn__login').text('Đăng nhập thành công'); 
                $("body").css("background-image", "linear-gradient(-90deg, #a8c0ff, #3f2b96)");
            },1000);
        }
        else if (userName == ""){
            setTimeout(function(){
                $('.btn__label').show();
                $('.loader').hide();   
                $('.warning__user').show();
            },400);
        }else if ( passWord == ""){
            setTimeout(function(){
                $('.btn__label').show();
                $('.loader').hide();   
                $('.warning__password').show();
            },400);
        }else {
            setTimeout(function(){
                $('.btn__label').show();
                $('.loader').hide();   
                $('.warning__error').show();
            },400);
   
        }
    });
    // Hide warning when click input
    $('.form__input').click(function(){
        $('.warning__password').hide();
        $('.warning__user').hide();
        $('.warning__error').hide();

        // background-image: linear-gradient(-90deg, red, yellow)
    });

});




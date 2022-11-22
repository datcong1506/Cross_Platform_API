const serverurl="";


const apiroute="/api/v1"
const userRoute="/users"
const user={
    resgister:{
        url:serverurl+apiroute+ "/api/v1/users/resgister",
        method: "post",
        require: {
            body:{                
                phonenumber:"",
                password:"",
                username:""
            }
        },
    },
    login:{
        url:"/api/v1/users/login",
        method:"post",
        require: {
            body:{                
                phonenumber:"",
                password:"",
            }
        }
    },
    edit:{
        url:"api/v1/users/edit",
        method:"post",
        require: {
            //auth jwt
            body:{                
                avatar:"",
                cover_image:"",
            }
        }
    },
    change_password:{
        url:"api/v1/users/change-password",
        method:"post",
        require: {
            //auth jwt
            body:{                
                currentPassword:"",
                newPassword:"",
            }
        }
    },
    show:{
        url:"api/v1/users/show",
        method:"get",
        require: {
            //auth jwt
        }
    },
    show_id:{
        url:"api/v1/users/show/:id",
        method:"get",
        require: {
            //auth jwt
            param:{              
                id:""// ref to userID  
            },
        }
    },
}

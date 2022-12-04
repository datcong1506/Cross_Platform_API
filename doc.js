const serverurl="";
const apiroute="/ api/v1/"
const API={}



// auth
const auth={
    headers:{
        authorization:""
    }
}

const httpStatus = {
    CONTINUE: "100",
    SWITCHING_PROTOCOLS: "101",
    PROCESSING: "102",
    OK: "200",
    CREATED: "201",
    ACCEPTED: "202",
    NON_AUTHORITATIVE_INFORMATION: "203",
    NO_CONTENT: "204",
    RESET_CONTENT: "205",
    PARTIAL_CONTENT: "206",
    MULTI_STATUS: "207",
    MULTIPLE_CHOICES: "300",
    MOVED_PERMANENTLY: "301",
    MOVED_TEMPORARILY: "302",
    SEE_OTHER: "303",
    NOT_MODIFIED: "304",
    USE_PROXY: "305",
    TEMPORARY_REDIRECT: "307",
    BAD_REQUEST: "400",
    UNAUTHORIZED: "401",
    PAYMENT_REQUIRED: "402",
    FORBIDDEN: "403",
    NOT_FOUND: "404",
    METHOD_NOT_ALLOWED: "405",
    NOT_ACCEPTABLE: "406",
    PROXY_AUTHENTICATION_REQUIRED: "407",
    REQUEST_TIME_OUT: "408",
    CONFLICT: "409",
    GONE: "410",
    LENGTH_REQUIRED: "411",
    PRECONDITION_FAILED: "412",
    REQUEST_ENTITY_TOO_LARGE: "413",
    REQUEST_URI_TOO_LARGE: "414",
    UNSUPPORTED_MEDIA_TYPE: "415",
    REQUESTED_RANGE_NOT_SATISFIABLE: "416",
    EXPECTATION_FAILED: "417",
    UNPROCESSABLE_ENTITY: "422",
    LOCKED: "423",
    FAILED_DEPENDENCY: "424",
    UNORDERED_COLLECTION: "425",
    UPGRADE_REQUIRED: "426",
    PRECONDITION_REQUIRED: "428",
    TOO_MANY_REQUESTS: "429",
    REQUEST_HEADER_FIELDS_TOO_LARGE: "431",
    INTERNAL_SERVER_ERROR: "500",
    NOT_IMPLEMENTED: "501",
    BAD_GATEWAY: "502",
    SERVICE_UNAVAILABLE: "503",
    GATEWAY_TIME_OUT: "504",
    HTTP_VERSION_NOT_SUPPORTED: "505",
    VARIANT_ALSO_NEGOTIATES: "506",
    INSUFFICIENT_STORAGE: "507",
    BANDWIDTH_LIMIT_EXCEEDED: "509",
    NOT_EXTENDED: "510",
    NETWORK_AUTHENTICATION_REQUIRED: "511"
  };


// res dua tren status, va message :status 200 la ok

//


API.User={
    resgister:{
        url:serverurl+ "/api/v1/users/resgister",
        method: "post",
        require: {
            rqJwt:false,
            body:{                
                phonenumber:"",
                password:"",
                username:""
            }
        },
    },
    login:{
        url:serverurl+"/api/v1/users/login",
        method:"post",
        require: {
            rqJwt:false,
            body:{                
                phonenumber:"",
                password:"",
            }
        }
    },
    edit:{
        url:serverurl+"api/v1/users/edit",
        method:"post",
        require: {
            rqJwt:true,
            body:{                
                avatar:"",
                cover_image:"",
            }
        }
    },
    change_password:{
        url:serverurl+"api/v1/users/change-password",
        method:"post",
        require: {
            rqJwt:true,
            body:{                
                currentPassword:"",
                newPassword:"",
            }
        }
    },
    show:{
        url:serverurl+"api/v1/users/show",
        method:"get",
        require: {
            rqJwt:true,
        }
    },
    show_by_id:{
        url:serverurl+"api/v1/users/show/:id",
        method:"get",
        require: {
            rqJwt:true,
            params:{              
                id:""// ref to userID  
            },
        }
    },
    show_by_phone:{
        url:serverurl+"api/v1/users/showbyphone/:phonenumber",
        method:"get",
        require: {
            rqJwt:true,
            params:{              
                phonenumber:""// 
            },
        }
    }
}

API.Chat={
    getMess_by_id:{
        url:serverurl+"api/v1/chats/getMessages/:chatId",
        method:"get",
        require: {
            rqJwt:true,
            params:{              
                chatId:""// 
            },
        }
    },
    getMess_by_friendID:{
        url:serverurl+"api/v1/chats/getMessagesbyfriendId/:friendId",
        method:"get",
        require: {
            rqJwt:true,
            params:{              
                friendId:""// 
            },
        }
    },
    deleteChat_by_chatId:{
        url:serverurl+"api/v1/chats/deleteChat/:chatId",
        method:"get",
        require: {
            rqJwt:true,
            params:{              
                chatId:""// 
            },
        }
    },
    getChats:{
        url:serverurl+"api/v1/chats/getChats",
        method:"get",
        require: {
            rqJwt:true,
            
        }
    },
    
}

API.friends={
    get_request_friend:{
        url:serverurl+"api/v1/friends/set-request-friend",
        method:"post",
        require: {
            rqJwt:true,
            body:{
                // user_id cua nguoi gui
                user_id:"",
            },
        }
    },
    get_requested_friend:{
        url:serverurl+"api/v1/friends/get-requested-friend",
        method:"post",
        require: {
            rqJwt:true,
            
        }
    },
    set_accept:{
        url:serverurl+"api/v1/friends/set-accept",
        method:"post",
        require: {
            rqJwt:true,
            boby:{
                // user_id cua nguoi gui loi moi ket ban
                user_id:""
            }
        }
    },
    cancel_request:{
        url:serverurl+"api/v1/friends/cancel-request",
        method:"post",
        require: {
            rqJwt:true,
            boby:{
                // user_id cua nguoi gui loi moi ket ban
                user_id:""
            }
        },
    },
    set_remove:{
        url:serverurl+"api/v1/friends/set-remove",
        method:"post",
        require: {
            rqJwt:true,
            boby:{
                // user_id cua nguoi gui loi moi ket ban
                user_id:""
            }
        },
    },
    list_friend:{
        url:serverurl+"api/v1/friends/list",
        method:"post",
        require: {
            rqJwt:true,
            
        },
    },
    list_friend_request:{
        url:serverurl+"api/v1/friends/list_requests",
        method:"get",
        require: {
            rqJwt:true,
            
        },
    },
    get_friend_status:{
        url:serverurl+"api/v1/friends/status/:friendId",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                friendId:""
            }
        },
    },
}

API.PostComment={
    create_post:{
        url:serverurl+"api/v1/postComment/create/:postId",
        method:"post",
        require: {
            rqJwt:true,
            params:{
                postId:""
            }
        },
    },
    get_post:{
        url:serverurl+"api/v1/postComment/list/:postId",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                postId:""
            }
        },
    }
}

API.PostLike={
    post_like:{
        url:serverurl+"api/v1/postLike/action/:postId",
        method:"post",
        require: {
            rqJwt:true,
            params:{
                postId:""
            }
        },
    }
}

API.PostReport={
    post_report:{
        url:serverurl+"api/v1/postReport/create/:postId",
        method:"post",
        require: {
            rqJwt:true,
            params:{
                postId:""
            }
        },
    }
}

API.Posts={
    create_post:{
        url:serverurl+"api/v1/posts/create",
        method:"post",
        require: {
            rqJwt:true,
            body:{
                described:"",
                // data of image
                images:[],
                videos:[],
            }
        },
    },
    edit_post:{
        url:serverurl+"api/v1/posts/edit/:id",
        method:"post",
        require: {
            rqJwt:true,
            params:{
                id:"",
            },
            body:{
                described:"",
                // data of image
                images:[],
                videos:[],
            }
        },
    },
    get_post:{
        url:serverurl+"api/v1/posts/show/:id",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                id:"",
            },
        },
    },
    delete_post:{
        url:serverurl+"api/v1/posts/delete/:id",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                id:"",
            },
        },
    },
    get_posts:{
        url:serverurl+"api/v1/posts/list",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                id:"",
            },
        },
    },
}

API.Chat={
    get_chat:{
        url:serverurl+"api/v1/chats/getMessages/:chatId",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                chatId:"",
            },
        },
    },
    get_chat_with_friend:{
        url:serverurl+"api/v1/chats/getMessagesbyfriendId/:friendId",
        method:"get",
        require: {
            rqJwt:true,
            params:{
                friendId:"",
            },
        },
    },
    delete_chat:{
        url:serverurl+"api/v1/chats/deleteChat/:chatId",
        method:"delete",
        require: {
            rqJwt:true,
            params:{
                chatId:"",
            },
        },
    },
    get_chats:{
        url:serverurl+"api/v1/chats/getChats",
        method:"get",
        require: {
            rqJwt:true,
            
        },
    },
}

API.Search={
    serach:{
        url:serverurl+"api/v1/search/:key",
        method:"get",
        require: {
            rqJwt:true,
            
        },
    },
}


module.exports=API;
const db = require("./db");

const allProducts = () => {
  return db.Movie.find().then((result) => {
    if (result) {
      return {
        statusCode: 200,
        products: result,
      };
    } else {
      return {
        statusCode: 404,
        message: "No data present",
      };
    }
  });
};

  const findId=(id)=>{
    return db.ToView.findOne({
      id
    }).then((result)=>{
        if (result) {
            return {
              id:id,
              statusCode: 200,
              product: result,
            };
          } else {
            return {
              statusCode: 404,
              message: "No data present",
            };
          }
    })
  }

const deletedata = () => {
  return db.ToView.find().then((result) => {
    if (result) {
      db.ToView.deleteMany().then((data) => {
        if (data) {
          return {
            statusCode: 200,
            message: "deleted",
          };
        } else {
          return {
            statusCode: 404,
            message: "No data present",
          };
        }
      });
    } else {
      return {
        statusCode: 404,
        message: "No data present",
      };
    }
  });
};

const addData = (adult,backdrop_path,id,title,original_language,original_title,overview,poster_path,video) => {
  return db.ToView.findOne({
    id
  }).then((result)=>{
    if(result){
      return {
        statusCode: 403,
        message: "Account Already exists",
      };
    }
    else{
      const newUser = new db.ToView({
        adult,
    backdrop_path,
    id,
    title,
    original_language,
    original_title,
    overview,
    poster_path,video
      })
      newUser.save();
      return {
        statusCode: 200,
        message: "item added. ",
      };
    }
  })
  }


module.exports = {
  allProducts,
  deletedata,addData,findId
};

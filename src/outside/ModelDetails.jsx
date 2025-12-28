
// import React, { use, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router";
// import Swal from "sweetalert2";
// import { AuthContext } from "../provider/AuthProvider";

// const ModelDetails = () => {
//   const navigate = useNavigate();
//   const {id} = useParams()
//   const [model,setModel] = useState({})
//   const [loading,setLoading] = useState(true)
//   const {user} = use(AuthContext)

//   useEffect(() => {
//     fetch(`http://localhost:3000/foods/${id}`,{
//             headers: {
//               authorization: `Bearer ${token}`
//             }
//             // user.accessToken
//           })
//           .then(res => res.json())
//           .then(data => {
//             console.log(data)
//             setModel(data.result)
//             setLoading(false)
//           })
//   },[])

//   const handleDelete = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/foods/${model._id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               Swal.fire("Deleted!", "Food has been deleted.", "success");
//               navigate("/all-product");
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     });
//   };

//   const { foodImage, foodName, reviewText, location } = model;
//   if(loading) {
//     return <div>Loading....</div>
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-10 mb-10 p-10 shadow">
//       <div className="group flex bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
        
    
//         <div className="w-[45%] overflow-hidden">
//           <img
//             src={foodImage}
//             alt={foodName}
//             className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
//           />
//         </div>

      
//         <div className="w-[55%] p-6">
//           <h2 className="text-2xl font-semibold mb-3">{foodName}</h2>

//           <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-pink-100 text-pink-600">
//             {location}
//           </span>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             {reviewText}
//           </p>

//           <div className="flex gap-3">
//             <Link
//               to={`/update-model/${model._id}`}
//               className="px-6 py-2 rounded-full bg-yellow-400 text-black transition-all duration-300 hover:bg-yellow-600"
//             >
//               Update
//             </Link>

//             <button className="px-6 py-2 rounded-full bg-yellow-400 text-black transition-all duration-300 hover:bg-yellow-600">Download</button>

//             <button
//               onClick={handleDelete}
//               className="px-6 py-2 rounded-full bg-red-500 text-white transition-all duration-300 hover:bg-red-600"
//             >
//               Delete
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ModelDetails;






import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ModelDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.accessToken) return;

    fetch(`http://localhost:3000/foods/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data.result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id, user]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/foods/${model._id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Food has been deleted.", "success");
              navigate("/all-product");
            }
          });
      }
    });
  };


  const handleDownload = () => {
    fetch(`http://localhost:3000/downloads`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({...model, downloaded_by: user.email})
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            toast.success("Successfully dowloaded!")
          })
          .catch(err => {
            console.log(err)
          })
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  const { foodImage, foodName, reviewText, location } = model;

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-10 shadow">
      <div className="group flex bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-[45%] overflow-hidden">
          <img
            src={foodImage}
            alt={foodName}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="w-[55%] p-6">
          <h2 className="text-2xl font-semibold mb-3">{foodName}</h2>

          <span className="inline-block mb-3 px-4 py-1 text-sm rounded-full bg-pink-100 text-pink-600">
            {location}
          </span>

          <p className="text-gray-600 mb-6">{reviewText}</p>

          <div className="flex gap-3">
            <Link
              to={`/update-model/${model._id}`}
              className="px-6 py-2 bg-yellow-400 rounded-full"
            >
              Update
            </Link>

            <button onClick={handleDownload} className="px-6 py-2 bg-yellow-400 rounded-full">
              Download
            </button>

            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-500 text-white rounded-full"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;

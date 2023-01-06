import React from 'react'
import Image from 'react-bootstrap/Image'

function Profile() {
    return (
        <div className='m-5'>
 <h1>My Profile</h1>
<div class="container mt-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-7">
        <div class="card p-3 py-4">
          <div class="text-center">  <Image
        src=
"https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/pixel%20avatar.png"
        
      />
       </div>
          <div class="text-center mt-3 gap-3">
            <span class="bg-secondary p-1 px-4 rounded text-white">Full Stack Developer</span>
            <h5 class=" mt-5 mb-4 gap-sm-5">User Name</h5>
            <div class="px-4 mt-1">
              <p class=" gap-3 text-md-start"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ipsa nam voluptatum enim facilis quisquam quae accusantium rerum ducimus quia velit culpa, ea nobis dolores, sint cupiditate praesentium voluptates cum!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nulla autem architecto exercitationem veniam nihil fugit quasi placeat ut cupiditate hic praesentium vitae a reiciendis consequatur, excepturi sapiente perspiciatis eligendi.
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam inventore alias, laboriosam illum quos dolorum magni provident nemo quod voluptatem commodi pariatur ipsum atque quo maxime? Non, velit. Facere, error!</p>
            </div>
            </div>
      </div>
    </div>
  </div>
  </div>
  </div>
    

    )
}

export default Profile

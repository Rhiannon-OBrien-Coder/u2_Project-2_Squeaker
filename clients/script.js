//Global variables

    //sidebar
        const loggedinPage = document.querySelector('.loggedin')
            const welcomeUser = document.querySelector('#welcomeUser')
            const userIcon = document.querySelector('#userImage')
            const sidebarBtn1 = document.querySelector('#sb1')
            const sidebarBtn2 = document.querySelector('#sb2')
            const sidebarBtn3 = document.querySelector('#sb3')
            const sidebarBtn4 = document.querySelector('#sb4')
            const logoutBtn = document.querySelector('#logout')

        const loggedoutPage = document.querySelector('.loggedout')
            const usernameLOInput = document.querySelector('#usernameLO')
            const passwordLOInput = document.querySelector('#passwordLO')
            const loginBtn = document.querySelector('#login')
            const createAccount = document.querySelector('#createAccount')

        const newAccountPage = document.querySelector('.newAccount')
            const usernameCAInput = document.querySelector('#usernameCA')
            const passwordCAInput = document.querySelector('#passwordCA')
            const createAccountBtn = document.querySelector('#createAccountBtn')

    //feed
        const feedTitle = document.querySelector('#feedTitle')

        const newSqueak = document.querySelector('.squeak')
            const addImage = document.querySelector('#addimage')
            const squeakContent = document.querySelector('#content')
            const squeakBtn = document.querySelector('#sendBtn')

        const feed = document.querySelector('.feed')

    //account 
        const accountInfo = document.querySelector('.accountInfo')
            const inputIconUrl = document.querySelector('#iconUrl')
            const inputUsernameText = document.querySelector('#accountUsername')
            const inputPasswordText = document.querySelector('#accountPassword')

        const accountEditBtn = document.querySelector('#accountEdit')

        const accountForm = document.querySelector('#accountInput')
            const accountIconUrl = document.querySelector('#iconUrlImg')
            const accountUsername = document.querySelector('#usernameText')
            const accountPassword = document.querySelector('#passwordText')

        const accountSaveBtn = document.querySelector('#accountSave')

    //my mischief
        const myMischief = document.querySelector('.myMischief')
        const followersList = document.querySelector('#followersList')

    //joined mischief
        const joinedMischiefs = document.querySelector('.joinedMischiefs')
        const followingList = document.querySelector('#followingList')

    //Between Functions
        let loggedInUserId = ""
        let loggedinUsername = ""
        let loggedinIcon = ''

//functions

async function squeaks() {
    let squeakResponse = await axios.get(`http://localhost:3001/squeaks`)
    let squeakData = squeakResponse.data
    for (i=0; i<squeakData.length; i++) {
        let image = squeakData[i].image
        let content = squeakData[i].content
        let userId = squeakData[i].user
        let squeakId = squeakData[i]._id

        let userResponse = await axios.get(`http://localhost:3001/users/${userId}`)
        let userName = userResponse.data.username
        let userIcon = userResponse.data.icon

            let commentResponse = await axios.get(`http://localhost:3001/comments/squeak/${squeakId}`)
            let commentsArray = commentResponse.data
            let allComments = ""
            if (commentsArray.length > 0) {
                for (a=0; a<commentsArray.length; a++) {
                    let commentUserId = commentsArray[a].user
                    let commentContent = commentsArray[a].content
                    let userCommentResponse = await axios.get(`http://localhost:3001/users/${commentUserId}`)
                    let commenterName = userCommentResponse.data.username
                    let commenterIcon = userCommentResponse.data.icon
                    let thisComment = `<img id="userIcon" src="${commenterIcon}">
                        <h3>@${commenterName} squeaked back @${userName}:</h3>
                        <p>${commentContent}</p>`
                    allComments = allComments + thisComment
                }
            }

        if(image !== undefined){
            const div = document.createElement('div')
            div.innerHTML =
            `<div>
                <div id="squeakerInfo">
                    <img id="userIcon" src="${userIcon}">
                    <h3>@${userName} squeaked:</h3>
                    <p id="postContent">${content}</p>
                </div>
                <img src="${image}">
                ${allComments}
                <form class="comment">
                    <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
                    <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
                    <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
                    <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
                </form>
            </div>`
            feed.appendChild(div)
        }  else {
            const div = document.createElement('div')
            div.innerHTML =
            `<div>
                <div id="squeakerInfo">
                    <img id="userIcon" src="${userIcon}">
                    <h3>@${userName} squeaked:</h3>
                    <p id="postContent">${content}</p>
                </div>
                ${allComments}
                <form class="comment">
                    <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
                    <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
                    <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
                    <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
                </form>
            </div>`
            feed.appendChild(div)
        }
    }
}
squeaks()

//event listeners

loginBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    const thisUsername = usernameLOInput.value
    const thisPassword = passwordLOInput.value
    try {
      const response = await axios.get(`http://localhost:3001/users/usernames/${thisUsername}`)
      const data = response.data[0]
      if (response.status === 200) {
        if (data.password === thisPassword) {
            loggedoutPage.style.visibility = "hidden"
            welcomeUser.innerText = `Welcome ${data.username}!`
            userIcon.innerHTML = `<img class="userImage" src="${data.icon}" alt="${data.username}'s icon">`
            loggedInUserId = `${data._id}`
            loggedinUsername= `${data.username}`
            loggedinIcon = `${data.icon}`
            loggedinPage.style.visibility = "visible"
        } else {
          alert('Please enter correct password.')
        }
      } else {
        alert('Please enter valid username and password.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    }
  })

// sidebar switcher 
logoutBtn.addEventListener('click', async () => {
loggedoutPage.style.visibility = "visible"
loggedinPage.style.visibility = "hidden"
newAccountPage.style.visibility = "hidden"
})

createAccount.addEventListener('click', async () => {
loggedoutPage.style.visibility = "hidden"
loggedinPage.style.visibility = "hidden"
newAccountPage.style.visibility = "visible"
})

    sidebarBtn1.addEventListener('click', async () => {
    })

    sidebarBtn2.addEventListener('click', async () => {
    })

    sidebarBtn3.addEventListener('click', async () => {
    })

    sidebarBtn4.addEventListener('click', async () => {
    })

// Create new User
//   squeakBtn.addEventListener('click', async (event) => {
//     event.preventDefault()
//     try {
//         if (loggedInUser !== "") {
//             if (squeakContent.value !== "") {
//                 if(addImage.value !== "") {
//                     await axios.post( 'http://localhost:3001/squeaks', 
//                         {
//                             image: `${addImage.value}`,
//                             content: `${squeakContent.value}`,
//                             user: `${loggedInUser}`
//                         })
//                         const div = document.createElement('div')
//                         div.innerHTML =
//                         `<div>
//                             <div id="squeakerInfo">
//                                 <img id="userIcon" src="${userIcon}">
//                                 <h3>@${userName} squeaked:</h3>
//                                 <p id="postContent">${content}</p>
//                             </div>
//                             <img src="${image}">
//                             <form class="comment">
//                                 <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
//                                 <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
//                                 <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
//                                 <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
//                             </form>
//                         </div>`
//                         feed.appendChild(div)
//                 } else if (addImage.value === "") {
//                     await axios.post( 'http://localhost:3001/squeaks', {
//                             content: `${squeakContent.value}`,
//                             user: `${loggedInUser}`
//                     })
//                     const div = document.createElement('div')
//                     div.innerHTML =
//                     `<div>
//                         <div id="squeakerInfo">
//                             <img id="userIcon" src="${userIcon}">
//                             <h3>@${userName} squeaked:</h3>
//                             <p id="postContent">${content}</p>
//                         </div>
//                         <form class="comment">
//                             <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
//                             <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
//                             <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
//                             <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
//                         </form>
//                     </div>`
//                     feed.appendChild(div)
//                 }
//             } else {
//                 alert('Please enter content for your squeak.')
//             }
//         } else {
//             alert(`Please login to get Squeakin'`)
//         }
//     } catch (error) {
//         console.error('Error:', error)
//         alert("An error occurred. Please try again.")
//         }
//   })

squeakBtn.addEventListener('click', async (event) => {
    event.preventDefault()
    try {
        if (loggedInUserId !== "") {
            if (squeakContent.value !== "") {
                if(addImage.value !== "") {
                    await axios.post( 'http://localhost:3001/squeaks', 
                        {
                            image: `${addImage.value}`,
                            content: `${squeakContent.value}`,
                            user: `${loggedInUserId}`
                        })
                        const div = document.createElement('div')
                        div.innerHTML =
                        `<div>
                            <div id="squeakerInfo">
                                <img id="userIcon" src="${loggedinIcon}">
                                <h3>@${loggedinUsername} squeaked:</h3>
                                <p id="postContent">${squeakContent.value}</p>
                            </div>
                            <img src="${image}">
                            <form class="comment">
                                <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
                                <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
                                <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
                                <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
                            </form>
                        </div>`
                        feed.insertBefore(div, feed.childNodes[5])
                } else if (addImage.value === "") {
                    await axios.post( 'http://localhost:3001/squeaks', {
                            content: `${squeakContent.value}`,
                            user: `${loggedInUserId}`
                    })
                    const div = document.createElement('div')
                    div.innerHTML =
                    `<div>
                        <div id="squeakerInfo">
                            <img id="userIcon" src="${loggedinIcon}">
                            <h3>@${loggedinUsername} squeaked:</h3>
                            <p id="postContent">${squeakContent.value}</p>
                        </div>
                        <form class="comment">
                            <img id="icon" src="https://cdn-icons-png.flaticon.com/512/4063/4063297.png">
                            <textarea id="commentContent" placeholder="Squeak back..." maxlength="150"></textarea>
                            <img id="icon" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png">
                            <img id="icon" src="https://static.wikia.nocookie.net/clubpenguin/images/e/e9/Stinky_Cheese_icon.png/revision/latest?cb=20170922015654">
                        </form>
                    </div>`
                    feed.insertBefore(div, feed.childNodes[5])
                }
            } else {
                alert('Please enter content for your squeak.')
            }
        } else {
            alert(`Please login to get Squeakin'`)
        }
    } catch (error) {
        console.error('Error:', error)
        alert("An error occurred. Please try again.")
        }
  })
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

        const newAccountPage = document.querySelector('.newAccount')
            const usernameCAInput = document.querySelector('#usernameCA')
            const passwordCAInput = document.querySelector('#passwordCA')
            const createAccountBtn = document.querySelector('#createAccount')

    //feed
        const feedTitle = document.querySelector('#feedTitle')

        const newSqueak = document.querySelector('.squeak')
            const addImage = document.querySelector('#addimage')
            const squeakBtn = document.querySelector('#sendBtn')
            const squeakContent = document.querySelector('#content')

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

//functions

async function squeaks() {
    let response = await axios.get(`http://localhost:3001/squeaks`)
    let squeakData = response.data
    for (i=0; i<squeakData.length; i++) {
        let image = squeakData[i].image
        let content = squeakData[i].content
        let userId = squeakData[i].user
        console.log(userId)
            let userResponse = await axios.get(`http://localhost:3001/users/${userId}`)
            let userName = userResponse.data.username
            let userIcon = userResponse.data.icon
        const div = document.createElement('div')
        div.innerHTML =
        `<div>
            <div id="squeakerInfo">
                <img id="userIcon" src="${userIcon}">
                <h3>@${userName} squeaked:</h3>
                <p id="postContent">${content}</p>
            </div>
            <img src="${image}">
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

squeaks()

//event listeners

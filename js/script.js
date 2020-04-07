// Get modal
var modal = document.getElementById("newPost_modal");
// Get button that opens the modal
var postBtn = document.getElementById("newPost_btn");
// Get <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get submit button in modal
var submitBtn = document.getElementById("newPost_submit");
// Initial post number
var postNumber = 0;
// Get like button 
var likeButton = document.getElementById("like_button");
// Get delete button
var deleteButton = document.getElementById("deletePost_btn");
// 


// Open modal on button click
postBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal on <span>(x) click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when user clicks outside modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

likeButton.onclick = function() {
    var likeCount = document.getElementById('like_counter');
    likeCount.value++;
}

deleteButton.onclick = function() {
    for(var i = 0; i <= postNumber; i++){
        var current = 'checkbox'+[i];
        var checkbox = document.getElementById(current);
        // alert(current);
        if (checkbox.checked) {
            checkbox.parentNode.parentNode.parentNode.style.display = 'none';
            checkbox.parentNode.parentNode.previousSibling.innerHTML = 'asdasd'
            // alert(current+' = true');
        } else {
            // alert(current+' = false')
        }
    }
    // var checkbox = document.getElementById('checkbox0');
    // alert(checkbox.checked)
}

function clearInput() {
    document.getElementById('newPost_title').value = '';
    document.getElementById('newPost_body').value = '';
}


submitBtn.onclick = function() {
    var title = document.getElementById('newPost_title').value;
    var body = document.getElementById('newPost_body').value;
    var newDiv = document.createElement('DIV');

    if (title == '' || body == '') {
        alert('Please write something')
    } else {
        postNumber += 1;
        newDiv.innerHTML = `
        <div class="post">

                <div class="post_Header">
                    <h1>Blog Post #${postNumber}</h1>
                    <label class="checkbox_container">
                        <input type="checkbox" id="checkbox${postNumber}">
                        <span class="checkmark"></span>
                    </label>
                </div>
    
                <div class="post_Body">
                    <h2 class="post_Title">${title}</h2>
                    <p>${body}</p>
    
                    <div class="social">
                        <div class="social_like">
                            <a href="#" class="fa fa-heart social_icon" id="like_button"></a>
                            <input type="number" id="like_counter" value="0" readonly>
                        </div>
    
                        <div class="social_share">
                            <a href="https://facebook.com/" class="fa fa-facebook social_icon"></a>
                            <a href="#https://twitter.com/" class="fa fa-twitter social_icon"></a>
                            <a href="#https://instagram.com/" class="fa fa-instagram social_icon"></a>
                            <a href="#" class="fa fa-copy social_icon"></a>
                        </div>
                    </div>
    
                </div>
        `
        clearInput();
        
        modal.style.display = "none"; // Close modal 
        document.getElementById('entry').prepend(newDiv); // Prepend new post
        document.getElementById('welcome').style.display = "none"; // Hide welcome message
    }

    
}

const postsContainer = document.querySelector('.posts');

//fetch('https://raw.githubusercontent.com/pipioun/wad-homework-1/refs/heads/main/res/json/posts.json')
fetch('res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);
            for(let singleJsonPost of json){
                //Article for posts
                const postArticle = document.createElement('article');
                postArticle.className = 'post';

                //header
                const postHeader = document.createElement('header');
                postHeader.className = 'post-header';

                //header avatar
                const headerAvatar = document.createElement('span');
                headerAvatar.className = 'post-avatar';
                headerAvatar.textContent = '\u{1F464}';

                //container for author and date
                const headerInfo = document.createElement('div')
                //author
                const headerAuthor = document.createElement('strong')
                headerAuthor.innerText = singleJsonPost.author;
                //date
                const headerDate = document.createElement('time')
                headerDate.innerText = singleJsonPost.createdAt;

                //text
                const postText= document.createElement('p')
                postText.innerText = singleJsonPost.text;

                //build togther
                headerInfo.append(headerAuthor);
                headerInfo.append(headerDate);

                postHeader.append(headerAvatar);
                postHeader.append(headerInfo);

                postArticle.append(postHeader);
                postArticle.append(postText);

                postsContainer.appendChild(postArticle);
                }
            })
            .catch(err => {
            const errDiv = document.createElement("div");

            errDiv.className = 'post';
            errDiv.innerText = err;
            postsContainer.appendChild(errDiv);
            });
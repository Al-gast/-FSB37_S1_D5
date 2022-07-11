let blogs = [];

function addBlog(event) {
    event.preventDefault()

    let name = document.getElementById('input-project-name').value;
    let proStart = document.getElementById('input-start-date').value;
    let proEnd = document.getElementById('input-end-date').value;
    let description = document.getElementById('input-description-blog').value;
    let image = document.getElementById('input-file-img');

    image = URL.createObjectURL(image.files[0]);

    checkedValue = [];
    let technologies = document.getElementsByClassName('technologies');
    let data = technologies.length
    for (var i = 0; i < data; i++) {
        if (technologies[i].checked == true) {
            checkedValue.push(technologies[i].value)
        }
    }

    let blog = {
        name,
        proStart,
        proEnd,
        checkedValue,
        description,
        image
    };

    blogs.push(blog);
    renderBlogs();
};

function renderBlogs() {

    let containerBlogs = document.getElementById('myProject');
    containerBlogs.innerHTML = "";

    for (let i = 0; i < blogs.length; i++) {
        
        containerBlogs.innerHTML += `
                <div class="cardMyProject" href="blogdetail.html">
                    <div>
                        <img src="${blogs[i].image}" alt="">
                    </div>
                    <div>
                        <h3>${blogs[i].name}</h3>
                        <p>Duration : ${getDuration(blogs[i].proStart, blogs[i].proEnd)}</p>
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        <p>${blogs[i].description}</p>
                    </div>
                    <div class="icon-lang">
                    ${(function icon() {
                        let string = ""
                        for (let j = 0; j < blogs[i].checkedValue.length; j++) {
                            string += `<div class="itemIconProject">
                                    <img src="${blogs[i].checkedValue[j]}">
                                </div>`
                        }
        
                        return string
                    })()}
                    </div>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>`
        
    };

};

function getDuration(start, end) {
    let proStart = new Date(start);
    let proEnd = new Date(end);

    let distance = proEnd - proStart;

    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' weeks'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days Ago'
            } else {
                let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                if (hoursDistance != 0) {
                    return hoursDistance + ' Hours Ago'
                } else {
                    let minuteDistance = Math.floor(distance / (60 * 1000))
                    if (minuteDistance != 0) {
                        return minuteDistance + ' Minutes Ago'
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance != 0)
                            return secondDistance + ' sec'
                    }
                }
            }
        }
    }
}
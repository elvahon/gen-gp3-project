




// example for fetch: POST with JSON format




async function showCard(){  
    const data = await fetch('http://localhost:8080/todolist')
    const jsonResponse = await data.json()
    let displayArea = document.querySelector('#fetch-area')
    let displayhtml = ""
    for (let i of jsonResponse){
        displayhtml = displayhtml + `<div>
        
        <!-- ${i.id}, ${i.content}, ${i.dueDate}, ${i.inputDate}, ${i.category}<button>DEL</button> -->


        <div class="task-card-kit ">
        <div class="clearfix">
            <button type="button " class="status-overlap rounded-pill btn btn-info float-left ">${i.dueDate}</button>
            <button type="button " class="star-overlap btn btn btn-outline-warning float-right "><i class="fas fa-star "></i></button>
        </div>

        <div class="card bg-light mb-3 ">
            <div class="card-body " data-toggle="modal" data-target="#ViewCard1Modal">
                <h5 class="card-title ">${i.id}</h5>
                <p class="card-text ">${i.content}</p>
                <!--Fetch data below-->
                <div id='fetch-area'></div>
                <!--Fetch data above-->

                <div class="bg-transparent clearfix ">
                    <button type="button " class="btn btn-light rounded-pill float-left "><i class="fas fa-clock "></i>${i.category}</button>
                    <a class="navbar-user float-right " href="# ">

                        <i class="fas fa-user-circle fa-2x"></i>
                        <i class="fas fa-user-circle fa-2x"></i>
                        <i class="fas fa-user-circle fa-2x"></i>
                    </a>
                </div>

            </div>

        </div>

    </div>
        
        
        
        
        
        </div>`
    }
    displayArea.innerHTML = displayhtml;
}
showCard()
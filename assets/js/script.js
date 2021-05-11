fetch("assets/json/movies.json")
    .then(movies => movies.json())
    .then(data =>
        data.results.forEach(element => {
            console.log(element.vote_average)
            let rate = Math.floor(element.vote_average / 2)
            let star
            switch (rate) {
                case 1:
                    star = "\u2605 \u2606 \u2606 \u2606 \u2606"
                    break;
                case 2:
                    star = "\u2605 \u2605 \u2606 \u2606 \u2606"
                    break;
                case 3:
                    star = "\u2605 \u2605 \u2605 \u2606 \u2606"
                    break;
                case 4:
                    star = "\u2605 \u2605 \u2605 \u2605 \u2606"
                    break;
                case 5:
                    star = "\u2605 \u2605 \u2605 \u2605 \u2605"
                    break;
                default:
                    star = "\u2606 \u2606 \u2606 \u2606 \u2606"
                    break;
            }
            movie.innerHTML +=
                `<div class="col-12 col-xl-6">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-4">
                        <img class="img-fluid"
                            src="${element.poster_path}" alt="${element.original_title}">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">${element.original_title}</h5>
                            <p class="card-text scroll">${element.overview}</p>
                            <p>${star}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        })
    )
    .catch(console.error)
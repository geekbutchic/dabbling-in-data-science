const setup = async () => {
  //FETCH DATA
  let jsonFetch = await fetch(`french_books_reviews.json`);
  let websiteData = await jsonFetch.json();

  let books = [];
  let bookRating = [];
  console.log(websiteData);
  for (let book of websiteData) {
    if (book.rating >= 4.0) {
      books.push(book.book_title);
      bookRating.push(book.rating);
    }
  }

  const data = {
    labels: books,
    datasets: [
      {
        label: "Popular French books with a Rating of 4.0 or Higher",
        data: bookRating,
        backgroundColor: [
          "rgba(255, 0, 0,)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255,140,0, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        hoverBorderWidth: 2,
      },
    ],
  };

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
};

setup();

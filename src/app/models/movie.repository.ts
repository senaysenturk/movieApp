import { Movie } from "./movie";

export class MovieRepository{
    private movies: Movie[];

    constructor(){
        this.movies = [ {
            id: 1,
            name: "Harry Potter ve Felsefe Taşı",
            description: "Harry Potter 11. yaş gününde güçlü bir sihirbaz olduğunu ve Hogwarts Cadılık ve Büyücülük Okulu'nun onu beklediğini öğrenir.",
            image_path: "movie-1.jpg"
          },
          {
            id: 2,
            name: "Harry Potter ve Sırlar Odası",
            description: "Harry, Dobby'nin Hogwarts'a dönmemesi gerektiği konusunda yaptığı uyarılara kulak asmaz ve Ron ve Hermione ile birlikte bir dizi gizemli saldırıyı araştırır.",
            image_path: "movie-2.jpg"
          },
          {
            id: 3,
            name: "Harry Potter ve Azkaban Tutsağı",
            description: "Hogwarts'daki üçüncü yılında Harry, Voldemort sempatizanı Sirius Black'in onu yakalamak üzere hapishaneden kaçmasıyla büyük bir tehlikeyle karşı karşıya kalır.",
            image_path: "movie-3.jpg"
          }
          ,{
            id: 4,
            name: "Harry Potter ve Ateş Kadehi",
            description: "Harry Potter, Hogwarts'daki dördüncü yılında tehlikeli Üçbüyücü Turnuvası'nda uzak okullardan gelen genç büyücülerle birlikte mücadele eder.",
            image_path: "movie-4.jpg"
          }]  
    }
    getMovies(): Movie []{
        return this.movies;
    }

    getMovieById(id: number): Movie | undefined{
        return this.movies.find(i=>i.id == id);
    }
}
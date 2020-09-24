//Challenge 1
const pilihanId = 16;

const challengeSatu = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${pilihanId}/comments`)
        .then(
            response => {
                const comments = response.data;
                console.log(`Nama : Muhammad Syahrizal Fauzi\nNIM : 21120118130066\nID pilihan : ${pilihanId}`);
                console.log('Challenge 1');
                console.log(`Jumlah comments adalah ${comments.length}`);
                for (let i = 0; i < comments.length; i++) {
                    const comment = comments[i];
                    console.log(`${i+1}. ${comment.body}`);
                }
            }
        );
};

challengeSatu();

//Challenge 2
const challengeDua = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            response => {
                console.log(`Nama : Muhammad Syahrizal Fauzi\nNIM : 21120118130066`);
                console.log('Challenge 2');
                const filteredData = response.data.filter(
                    data => {
                        return data.userId == 8;
                    }
                );
                console.log(filteredData);
            }
        );
};

challengeDua();
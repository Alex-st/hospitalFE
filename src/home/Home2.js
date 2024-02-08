import {useEffect, useState} from "react";


function Home2() {

    const [posts, setPosts] = useState([]);
    const [menu, setMenuValue] = useState('item1');

    const items = {
        item1 : "text of item1",
        item2 : "text of item2"
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setPosts(json)
                console.log(json)})
    }, [])

    return (
        <div>
            <p>{items[menu]}</p>

            <label htmlFor="menu">Menu</label>

            <select name="pets" id="pet-select" onChange={(event) => {
                setMenuValue(event.target.value)
            }}>
                <option value="item1">option1</option>
                <option value="item2">option2</option>
            </select>

            {/*hello { posts.length ? posts[0].title : null}*/}
            hello {posts[0]?.title}

            {/*hello {posts.map((post) => <p>{post.title}</p>)}*/}
        </div>
    )
}

export default Home2;
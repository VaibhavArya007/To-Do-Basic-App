export function CreateTodo() {
    return (
        <div>
            <input id="title" style={{
                margin: 10,
                padding: 10
            }} type="text" placeholder="title" /> <br />
            <input type="text" id="desc" style={{
                margin: 10,
                padding: 10
            }} placeholder="description" /> <br />
            <button style={{
                margin: 10,
                padding: 10
            }} onClick={() => {
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: document.getElementById("title").value,
                        desc: document.getElementById("desc").value
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(async function(res) {
                    if (res.ok) {
                        const json = await res.json();
                        alert("Todo Added");
                    } else {
                        alert("Error adding todo");
                    }
                })
                .catch(function(error) {
                    console.error("Error:", error);
                    alert("Error adding todo");
                });
            }}>Add A Todo</button>
        </div>
    );
}

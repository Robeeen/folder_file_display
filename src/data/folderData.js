const explorer = {
    name: "root",
    isFolder: true,
    items: [
        {
            name: "public",
            isFolder: true,
            items: [
                {
                    name: "data",
                    isFolder: true,
                    items: [
                        {
                            name: "data.json",
                            isFolder: false
                        },
                        {
                            name: "packages.jsx",
                            isFolder: false
                        }
                    ]
                },
                {
                    name: "index.js",
                    isFolder: false
                },
                {
                    name: "Photos",
                    isFolder: true,
                    items: [
                        {
                            name: "logo.jpeg",
                            isFolder: false
                        }
                    ]
                }

            ]
        }

    ],
    name: "index.php",
    isFolder: false
}

export default explorer
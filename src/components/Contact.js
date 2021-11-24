import React from 'react'

export default function About(props) {
    console.log(props)
    return (
        <div style={{ height: "100vh" }} className="iframe-background">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScvs9tpBqmzU2JEs2gDdPjVLL2GyxvrwyjKZ-7t86zjAUwh3g/viewform?embedded=true"
                width="100%"
                height='100%' 
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Loading…
                 </iframe>
        </div>
    )
}

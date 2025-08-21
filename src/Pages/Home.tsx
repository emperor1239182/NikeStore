export const Home = () => {

    const days : string[] = [
       "Sunday", 
       "Monday", 
       "Tuesday", 
       "Wednessday", 
       "Thursday", 
       "Friday", 
       "Saturday"
    ]
    const months : string[] = [
        "January",
        "February", 
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const date = new Date()
    const day = days[date.getDay()]
    const dateNum = date.getDate()
    const month = months[date.getMonth()]
    return (
        <>
        <section className="min-h-screen bg-gray-100 flex">
        <main  className=" flex-1 max-w-2xl mx-auto p-3 ">
        <h1 className="font-bold text-[20px] ">Discover</h1>
        <div className="text-[10px] text-gray-500 font-bold"> {day}, {dateNum} {month}</div>
        </main>
        </section>
        </>
    )
}
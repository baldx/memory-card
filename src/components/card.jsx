// eslint-disable-next-line react/prop-types
export default function Card({src, name}) {
    
    return (
        <>
        <div className="card">
            <img src={src} alt="" />
            <div className="name">{name}</div>
        </div>
        </>
    )
}
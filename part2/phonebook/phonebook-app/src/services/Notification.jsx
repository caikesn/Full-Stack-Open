const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="notis">
            {message}
        </div>
    )
}

export default Notification
function getYear() {
    return new Date().getFullYear()
}

function Footer() {
    return (
        <footer className="border-t w-full inline-block border-blue-900 px-2 text-center text-blue-900">
            <br />&nbsp;Copyright &copy; {getYear()} cfsnap.com.  All Rights Reserved.
        </footer>
    )
}

export default Footer
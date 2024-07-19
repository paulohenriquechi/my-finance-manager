import Footer from "./footer";
import Navbar from "./navbar";

export default function SideBar() {
    return (
        <div>
            <div className="h-full flex flex-col">
                <h3 className="py-4 text-2xl text-center">myFinanceManager</h3>
                <Navbar>
                    <Footer />
                </Navbar>
            </div>
        </div>
    )
}

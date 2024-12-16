import React, {useState} from "react";

import "../styles/Home.css";
import "../styles/Modal.css";
import "../styles/Mobile.css";

import Form from "../componenets/Form";

import logo from "../assets/logo192.png";


const Home = () => {

    const [modalUrl, setModalUrl] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        setShowModal(false);
        setModalUrl(null);
    };

    return (
        <div>
            <main>
                <img src={logo} alt="logo" className="logo"/>
                <div className={"text-container"}>
                    <h1>Neuro Nostalgia</h1>
                    <h2>Timeless AI Design, Crafted for Modern Minds</h2>
                </div>
                <div className="form-container">
                    <Form setModalUrl={setModalUrl} setShowModal={setShowModal} setLoading={setLoading}/>
                    {loading && (
                        <div className="modal">
                            <div className="loading-content">
                                <div className="spinner"></div>
                                <p>Generating...</p>
                            </div>
                        </div>
                    )}
                    {showModal && modalUrl && !loading && (
                        <div className="modal">
                            <div className="modal-content">
                                <button className="close-modal" onClick={closeModal}>
                                    &times;
                                </button>
                                <iframe src={modalUrl} title="Result" />
                            </div>
                        </div>
                    )}
                </div>
            </main>
            <footer>
                <p>Developer: <span>dvolynov@gmail.com </span></p>
            </footer>
        </div>
    );
};

export default Home;

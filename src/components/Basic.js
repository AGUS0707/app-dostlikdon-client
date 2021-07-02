import React from 'react';
import {API_PATH} from "../tools/constants";
import {getLanguage, getText} from "../locales";

const Basic = (props) => {
    return (
        <div className="grey">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="oq bg-white">

                            <div className="d-flex mb-5 align-items-center">
                                <a href="#" className="text-decoration-none mr-4">
                                    {getLanguage() === "uz" ? props.news.menuNameUz : getLanguage() === "ru" ? props.news.menuNameRu : props.news.menuNameEn}
                                </a>
                                <img className="mr-2 ml-2" src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 mr-4">{props.news.createdAt?.slice(-8,-3)} / {props.news.createdAt?.slice(0,11)}</p>
                                    <img className="ml-2 mr-2" src="/image/koz.svg" alt="Error"/>
                                        <a href="#" className="text-decoration-none mr-4 text-dark">{props.news.viewCount}</a>
                                        {/*<img src="/image/sms.svg" className="ml-2 mr-2" alt="Error"/>*/}
                                        {/*    <p className="mb-0">100</p>*/}
                            </div>
                            <h4>{getLanguage() === "uz" ? props.news.titleUz : getLanguage() === "ru" ? props.news.titleRu : props.news.titleEn}</h4>
                            <div className="card-img-top">
                                <img src={API_PATH + "file/get/"+ props.news.photo} className="w-100" alt=""/>
                            </div>
                            <div className="card border-0">
                                <div className="card-body">
                                    <p>{getLanguage() === "uz" ? props.news.descriptionUz : getLanguage() === "ru" ? props.news.descriptionRu : props.news.descriptionEn}</p>
                                </div>
                            </div>

                            <div className="border my-5"></div>

                            <div className="d-flex mb-4 justify-content-between">
                                <h3>{getText("comment")}</h3>
                                <h3>{getText("fikr")}</h3>
                            </div>
                            <div className="d-flex mb-4 input1 align-items-center">
                                <img src="/image/use.svg" alt="Error"/>
                                    <input type="text" className="" placeholder={getText("inputtext")}/>
                            </div>
                            <div className="d-flex mb-5 main align-items-center">
                                <img src="/image/nigina.svg" alt="Error"/>
                                    <div className="main2">
                                        <h4 className="mb-0">{getText("name")}</h4>
                                        <p className="my-2">{getText("tushunmovchilik")}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/yurak.svg" alt="Error"/>
                                                <p className="mb-0">{getText("answer")}</p>
                                                <p className="mb-0">{getText("before")}</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="d-flex align-items-center main3">
                                <img src="/image/sahar.svg" alt="Error"/>
                                    <div className="main4">
                                        <h4 className="mb-0">{getText("nameb")}</h4>
                                        <p className="my-2">{getText("tushunmovchilik")}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <img src="/image/qizilyurak.svg" alt="Error"/>
                                                <p className="mb-0">{getText("answer")}</p>
                                                <p className="mb-0">{getText("before")}</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="top oq bg-white">
                            <h3>{getText("media")}</h3>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("photoG")}</h5>
                            </div>
                            <h4>{getText("dostlikdon")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("videoG")}</h5>
                            </div>
                            <h4>{getText("dostlikdon")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("photoG")}</h5>
                            </div>
                            <h4>{getText("dostlikdon")}</h4>
                            <div className="border my-3"></div>
                            <div className="d-flex align-items-center text2 mt-4 mb-2">
                                <img src="/image/packega.svg" alt="Error"/>
                                    <p className="mb-0 ml-2 mr-5">16:48 / 12.11.20</p>
                                    <h5 className="mb-0">{getText("videoG")}</h5>
                            </div>
                            <h4>{getText("dostlikdon")}</h4>
                        </div>
                        <div className="bottom text-center">
                            <h6>{getText("online1")}</h6>
                            <img className="my-4" src="/image/treangle.svg" alt="Error"/>
                                <h6>
                                    {getText("online2")}
                                </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basic;
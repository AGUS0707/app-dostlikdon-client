import React from 'react';
import {getText} from "../locales";

const Media = () => {
    return (
        <div className="container">
            <h4 className="mb-3"><b>{getText("media")}</b></h4>
            <div className="alotof mb-4 rounded p-2 bg-white">
                <button type="button" className="btn active rounded">{getText("all")}</button>
                <button type="button" className="btn rounded">{getText("photoG")}</button>
                <button type="button" className="btn rounded">{getText("videoG")}</button>
            </div>
        </div>
    );
};

export default Media;
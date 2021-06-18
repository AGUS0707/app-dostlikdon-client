import React, {useEffect} from 'react';
import AdminLayout from "../components/AdminLayout";
import {connect} from "react-redux";
import {AvForm, AvField} from "availity-reactstrap-validation"
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {setState, saveNews, saveFile, getNews, deleteNews} from "../redux/actions/newsAction";
import {getSubmenus} from "../redux/actions/menusActions";
import {API_PATH} from "../tools/constants";


const AdminNews = (props) => {

    useEffect( () => {
        props.getSubmenus()
        props.getNews()
    }, [])

    const generateUrl = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const changeInput = (e) => {
        let data = new FormData()
        props.saveFile(data)
        data.append("file", e.target.files[0])
    }
    return (
        <AdminLayout history={props.history}>
           <button type="button" className="btn btn-success d-block ml-auto" onClick={ () => props.setState({open: !props.open})}>Add News</button>

            <div className="row">
                {
                    props.news.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.titleUz}</h5>
                                    </div>
                                    <div className="card-body">
                                        <img src={API_PATH + "file/get/" + item.photo.id} className="w-100" alt=""/>
                                        <p>{item.descriptionUz}</p>
                                        <h3><b>Menu:</b>{item.menu.nameUz}</h3>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-success" onClick={() => props.setState({open: true, selectedItem: item, photo: item.photo.id})}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => props.setState({deleteModal: true, selectedIndex: item.id})}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Modal isOpen={props.open} toggle={() => props.setState({open: false})}>
                <AvForm onSubmit={props.saveNews} model={props.selectedItem}>
                    <ModalBody>

                        {
                            props.selectedItem.id ?
                                <AvField name="id" type="text" className="d-none"/> : ""
                        }

                        <AvField name="titleUz" required type="text" onChange={(e) => props.setState({url: generateUrl(e.target.value)})} label="Title (uz)"/>
                        <AvField name="descriptionUz" type="textarea" label="Description (uz)"/>

                        <AvField name="titleEn" required type="text" label="Title (en)"/>
                        <AvField name="descriptionEn" type="textarea" label="Description (en)"/>

                        <AvField name="titleRu" required type="text" label="Title (ru)"/>
                        <AvField name="descriptionRu" type="textarea" label="Description (ru)"/>

                        <AvField name="url" type="text" value={props.url} label="URL"/>

                        <AvField name="menu" type="select" label="Menu">
                            <option>Choose menu</option>
                            {
                                props.subMenus.map( (item, index) => {
                                    return (
                                        <option value={item.id}>{item.nameUz}</option>
                                    )
                                })
                            }
                        </AvField>

                        <input type="file" accept=".jpg, .png, .jpeg, .svg" onChange={changeInput}/>
                        {
                            props.photo.length > 0 ? <span onClick={() => props.setState({photo: ""})}>&times;</span> : ""
                        }
                        <img src={API_PATH + "file/get/" + props.photo} alt="" className="w-100"/>
                    </ModalBody>
                    <ModalFooter>
                        <button type="submit" className="btn btn-success">Save</button>
                        <button type="submit" className="btn btn-secondary" onClick={() => props.setState({open: false})}>Cancel</button>
                    </ModalFooter>
                </AvForm>
            </Modal>

            <Modal isOpen={props.deleteModal} toggle={() => props.setState({deleteModal: false})}>
                <ModalBody>Rostdan ham ochirmoqchimisiz</ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-success" onClick={props.deleteNews}>Ha</button>
                    <button type="button" className="btn btn-success" onClick={() => props.setState({deleteModal: false})}>Yo'q</button>
                </ModalFooter>
            </Modal>


        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
        url: state.news.url,
        subMenus: state.menus.subMenus,
        photo: state.news.photo,
        news: state.news.news,
        deleteModal: state.news.deleteModal,
        selectedIndex: state.news.selectedIndex,
        selectedItem: state.news.selectedItem
    }

}

export default connect(mapStateToProps, {setState,saveNews, getSubmenus, saveFile, getNews, deleteNews})(AdminNews) ;
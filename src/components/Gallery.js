import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

class ImageGallery extends Component {

    render() {
        const IMAGES =
            [
                {
                    src: "./img/gallery0.png",
                    thumbnail: "./img/gallery0.png",
                    thumbnailWidth: 320,
                    thumbnailHeight: 174,
                    isSelected: false,
                },
                {
                src: "./img/gallery1.png",
                thumbnail: "./img/gallery1.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery2.jpeg",
                thumbnail: "./img/gallery2.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery17.png",
                thumbnail: "./img/gallery17.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery18.png",
                thumbnail: "./img/gallery18.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery19.png",
                thumbnail: "./img/gallery19.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery20.png",
                thumbnail: "./img/gallery20.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery7.jpeg",
                thumbnail: "./img/gallery7.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery9.jpeg",
                thumbnail: "./img/gallery9.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery21.png",
                thumbnail: "./img/gallery21.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery11.jpeg",
                thumbnail: "./img/gallery11.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery12.jpeg",
                thumbnail: "./img/gallery12.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery22.png",
                thumbnail: "./img/gallery22.png",
                thumbnailWidth: 260,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery14.jpeg",
                thumbnail: "./img/gallery14.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery15.jpeg",
                thumbnail: "./img/gallery15.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery16.jpeg",
                thumbnail: "./img/gallery16.jpeg",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery23.png",
                thumbnail: "./img/gallery23.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery24.png",
                thumbnail: "./img/gallery24.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            },
            {
                src: "./img/gallery25.png",
                thumbnail: "./img/gallery25.png",
                thumbnailWidth: 320,
                thumbnailHeight: 174,
                isSelected: false,
                // caption: "After Rain (Jeshu John - designerspics.com)"
            }]
        return (
            <div id="gallery">
                <div className="container">
                <div className="row" style={{marginTop:"10%"}}>
              <div className="col-md-12 text-center">
                <h4 className='home-head'>Hospital Gallery</h4>
              </div>
            </div>
                    <div className="row">
                    <div className="col-md-12 text-center">
                    <Gallery images={IMAGES} />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ImageGallery;





// export default function sketch (p) {
//     let rotation = 0;
//
//     p.setup = function () {
//         p.createCanvas(600, 400, p.WEBGL);
//     };
//
//     p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//         if (props.rotation){
//             rotation = props.rotation * Math.PI / 180;
//         }
//     };
//
//     p.draw = function () {
//         p.background(100);
//         p.noStroke();
//         p.push();
//         p.rotateY(rotation);
//         p.box(100);
//         p.pop();
//     };
// };

export default function sketch(p) {
    let width = 100;
    let height = 100;
    p.setup = function () {
        p.createCanvas(720, 400, p.WEBGL);
        p.noStroke();
        p.noLoop();
    };

    p.draw = function () {
        p.drawCircle(width / 2, 280, 6);
    };

    p.drawCircle = function (x, radius, level) {
        // p.background(100);
        var tt = 126 * level / 4.0;
        p.fill(tt);
        p.ellipse(x, height / 2, radius * 2, radius * 2);
        if (level > 1) {
            level = level - 1;
            p.drawCircle(x - radius / 2, radius / 2, level);
            p.drawCircle(x + radius / 2, radius / 2, level);
        }
    }
};
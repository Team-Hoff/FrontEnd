import ACES from '../../Assets/Programs/ACES2.png';
import Aerospace from '../../Assets/Programs/Aerospace.png';
import Agricultural from '../../Assets/Programs/Agricultural.png';
import BMES from '../../Assets/Programs/BMES.png';
import Chemical from '../../Assets/Programs/Chemical.png';
import Civil from '../../Assets/Programs/civil.png';
import ELEESA from '../../Assets/Programs/ELEESA.png';
import geological from '../../Assets/Programs/geological.png';
import geomatic from '../../Assets/Programs/geomatic.png';
import Materials from '../../Assets/Programs/Materials.png';
import Mechanical from '../../Assets/Programs/Mechanical.png';
import Metallurgical from '../../Assets/Programs/Metallurgical.png';
import Petrochem from '../../Assets/Programs/Petrochem.png';
import Petroleum from '../../Assets/Programs/Petroleum.png';
import Telecom from '../../Assets/Programs/Telecom.png';
import comp from '../../Assets/BackgroundPics/coe.png';
import elec from '../../Assets/BackgroundPics/elec.png';
import aero from '../../Assets/BackgroundPics/aero.png';
import agric from '../../Assets/BackgroundPics/agric.png';
import biomed from '../../Assets/BackgroundPics/biomed.png';
import chem from '../../Assets/BackgroundPics/chem.png';
import geol from '../../Assets/BackgroundPics/geol.png';
import geom from '../../Assets/BackgroundPics/geom.png';
import mat from '../../Assets/BackgroundPics/mat.png';
import mech from '../../Assets/BackgroundPics/mech.png';
import civil from '../../Assets/BackgroundPics/civil.png';
import telecom from '../../Assets/BackgroundPics/telecom.png';
import petrochem from '../../Assets/BackgroundPics/petrochem.png';
import petroleum from '../../Assets/BackgroundPics/petroleum.png';
import metall from '../../Assets/BackgroundPics/metall.png';
import compv from "../../Pages/Programme Page/Images/Videos/COEvideo.mp4";
import biov from "../../Pages/Programme Page/Images/Videos/BiomedicalVideo.mp4";
import elecv from "../../Pages/Programme Page/Images/Videos/ElectricalVideo.mp4";
import telev from "../../Pages/Programme Page/Images/Videos/TelecomVideo.mp4";

export const ProgramData = [
    {
        id: 'computer',
        name: 'Computer Engineering',
        img: `${ACES}`,
        pic: `${comp}`,
        vid: `${compv}`,
        paragraph: 'Computer engineering is a branch of electrical engineering that integrates several fields of computer science and electronic engineering required to develop computer hardware and software.'
    },
    {
        id: 'biomedical',
        name: 'Biomedical Engineering',
        img: `${BMES}`,
        pic: `${biomed}`,
        vid: `${biov}`,
        paragraph: 'Biomedical engineering or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes.'
    },
    {
        id: 'electrical',
        name: 'Electrical Engineering',
        img: `${ELEESA}`,
        pic: `${elec}`,
        vid: `${elecv}`,
        paragraph: 'Electrical engineering is an engineering discipline concerned with the study, design, and application of equipment, devices, and systems which use electricity, electronics, and electromagnetism.'
    },
    {
        id: 'telecom',
        name: 'Telecom Engineering',
        img: `${Telecom}`,
        pic: `${telecom}`,
        vid: `${telev}`,
        paragraph: 'Biomedical engineering or medical engineering is the application of engineering principles and design concepts to medicine and biology for healthcare purposes.'
    },
    {
        id: 'aerospace',
        name: 'Aerospace Engineering',
        img: `${Aerospace}`,
        pic: `${aero}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'agricultural',
        name: 'Agricultural Engineering',
        img: `${Agricultural}`,
        pic: `${agric}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'chemical',
        name: 'Chemical Engineering',
        img: `${Chemical}`,
        pic: `${chem}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'geological',
        name: 'Geological Engineering',
        img: `${geological}`,
        pic: `${geol}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'geomatic',
        name: 'Geomatic Engineering',
        img: `${geomatic}`,
        pic: `${geom}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'materials',
        name: 'Materials Engineering',
        img: `${Materials}`,
        pic: `${mat}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'civil',
        name: 'Civil Engineering',
        img: `${Civil}`,
        pic: `${civil}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'petroleum',
        name: 'Petroleum Engineering',
        img: `${Petroleum}`,
        pic: `${petroleum}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'petrochemical',
        name: 'Petrochemical Engineering',
        img: `${Petrochem}`,
        pic: `${petrochem}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'metallurgical',
        name: 'Metallurgical Engineering',
        img: `${Metallurgical}`,
        pic: `${metall}`,
        vid: `${telev}`,
        paragraph: ''

    },
    {
        id: 'mechanical',
        name: 'Mechanical Engineering',
        img: `${Mechanical}`,
        pic: `${mech}`,
        vid: `${telev}`,
        paragraph: ''

    }

]
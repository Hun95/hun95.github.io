import React, { useRef, useState, useContext, useEffect } from 'react';
// import SceneData from '../data/SceneData';
const MainPageContext = React.createContext();

const MainPageProvider = ({ children }) => {
  const firstRef = useRef();
  const firstA = useRef();
  const firstB = useRef();
  const firstC = useRef();
  const firstD = useRef();
  const firstE = useRef();
  const firstF = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const canvasRef = useRef();
  const fourthRef = useRef();
  const [yOffset, setYoffset] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const [prevScrollHeight, setPrevScrollHeight] = useState(0);
  const [enterNewScene, setEnterNewScene] = useState(false);
  const [firstRender, setFirstRender] = useState(true);
  const [sequence, setSequence] = useState(0);
  const SceneData = [
    {
      id: 0,
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        section: firstRef,
        firstA: firstA,
        firstB: firstB,
        firstC: firstC,
        firstD: firstD,
        firstE: firstE,
        firstF: firstF,
      },
      values: {
        aWidthIn: [5, 60, { start: 0.02, end: 0.12 }],
        aPosition: [0, 10, { start: 0.12, end: 0.15 }],
        aOpacityOut: [1, 0, { start: 0.14, end: 0.16 }],
        bWidth: [1, 7, { start: 0.2, end: 0.4 }],
        cOpacityIn: [0, 1, { start: 0.3, end: 0.4 }],
        bOpacityOut: [1, 0, { start: 0.4, end: 0.45 }],
        bOpacityIn: [0, 1, { start: 0.15, end: 0.2 }],
        dOpactiyIn: [0, 1, { start: 0.45, end: 0.55 }],
        eOpactiyIn: [0, 1, { start: 0.65, end: 0.75 }],
        fOpactiyIn: [0, 1, { start: 0.85, end: 0.95 }],
        dOpactiyOut: [1, 0, { start: 0.6, end: 0.65 }],
        eOpactiyOut: [1, 0, { start: 0.75, end: 0.8 }],
        fOpactiyOut: [1, 0, { start: 0.95, end: 1 }],
        cOpactiyOut: [1, 0, { start: 0.95, end: 0.99 }],
        bWidthout: [7, 1, { start: 0.95, end: 0.99 }],
      },
    },

    {
      id: 1,
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        section: secondRef,
      },
    },

    {
      id: 2,
      type: 'sticky',
      heightNum: 2,
      scrollHeight: 0,
      objs: {
        section: thirdRef,
        canvasRef: canvasRef,
        videoImages: [],
      },
      values: {
        videoImageCount: 85,
        imageSequence: [0, 84],
      },
    },

    {
      id: 3,
      type: 'sticky',
      heightNum: 5,
      scrollHeight: 0,
      objs: {
        section: fourthRef,
      },
    },
  ];

  const [scene, setScene] = useState(SceneData);

  useEffect(() => {
    setFirstRender(false);
    setHeight();
    setSequence(0);
  }, [firstRender]);

  useEffect(() => {
    setCanvasImage();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setHeight());
    window.addEventListener('load', setHeight());

    return () => {
      window.removeEventListener('resize', setHeight());
      window.removeEventListener('load', setHeight());
    };
  }, [yOffset]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYoffset(window.pageYOffset);
    });

    return () => {
      window.removeEventListener('scroll', () => {
        setYoffset(window.pageYOffset);
      });
    };
  });
  useEffect(() => {
    setSceneNum();
    scrollLoop();

    playAnimation();
  }, [yOffset]);

  const setHeight = () => {
    let newArr = scene.map(element => {
      const { heightNum, type, objs } = element;
      if (type === 'sticky') {
        return { ...element, scrollHeight: heightNum * window.innerHeight };
      } else if (type === 'normal') {
        return {
          ...element,
          scrollHeight: objs.section.current.offsetHeight,
        };
      }
    });

    setScene(newArr);

    for (let i = 0; i < scene.length; i++) {
      scene[i].objs.section.current.style.height = `${scene[i].scrollHeight}px`;
    }
    const heightRatio = window.innerHeight / 1500;
    scene[2].objs.canvasRef.current.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`;
  };

  const setSceneNum = () => {
    let totalScrollHeight = 0;
    for (let i = 0; i < scene.length; i++) {
      totalScrollHeight += scene[i].scrollHeight;
      if (totalScrollHeight >= yOffset) {
        setCurrentScene(i);
        break;
      }
    }

    document.body.setAttribute('id', `show-scene-${currentScene}`);
  };

  const scrollLoop = () => {
    setPrevScrollHeight(0); //선언하는 게 아니라 for문이 돌면서 값이 초기화 됨.
    setEnterNewScene(false);
    for (let i = 0; i < currentScene; i++) {
      setPrevScrollHeight(
        prevScrollHeight => prevScrollHeight + scene[i].scrollHeight
      );
    }
    if (yOffset > prevScrollHeight + scene[currentScene].scrollHeight) {
      setEnterNewScene(true);
      if (currentScene === 0) return;
      setCurrentScene(currentScene => currentScene++);
    }
    if (yOffset < prevScrollHeight) {
      setEnterNewScene(true);

      setCurrentScene(currentScene => currentScene--);
    }
    if (enterNewScene) return;
    document.body.setAttribute('id', `show-scene-${currentScene}`);
  };

  const calcValues = (values, currentYOffset) => {
    let rv;

    const newHeight = scene[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / newHeight;

    if (values.length === 3) {
      const partScrollStart = values[2].start * newHeight;
      const partScrollEnd = values[2].end * newHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;

      if (
        currentYOffset >= partScrollStart &&
        currentYOffset <= partScrollEnd
      ) {
        rv =
          ((currentYOffset - partScrollStart) / partScrollHeight) *
            (values[1] - values[0]) +
          values[0];
      } else if (currentYOffset < partScrollStart) {
        rv = values[0];
      } else if (currentYOffset > partScrollEnd) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv;
  };
  const setCanvasImage = () => {
    let imgElem;
    for (let i = 1; i < scene[2].values.videoImageCount + 1; i++) {
      imgElem = new Image();
      imgElem.src = `/Image/${i}.jpg`;

      scene[2].objs.videoImages.push(imgElem);
    }
  };
  const playAnimation = () => {
    const objs = scene[currentScene].objs;
    const newValues = scene[currentScene].values;

    const currentYOffset = yOffset - prevScrollHeight;
    const newHeight = scene[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / newHeight;

    switch (currentScene) {
      case 0:
        if (scrollRatio <= 0.2) {
          objs.firstA.current.style.display = 'fixed';
          objs.firstA.current.style.animation = 'none';

          objs.firstA.current.style.top = '70vh';
          objs.firstA.current.style.width = `${calcValues(
            newValues.aWidthIn,
            currentYOffset
          )}%`;

          objs.firstA.current.style.bottom = `${calcValues(
            newValues.aPosition,
            currentYOffset
          )}%`;
        }
        if (scrollRatio <= 0.3) {
          objs.firstA.current.style.opacity = calcValues(
            newValues.aOpacityOut,
            currentYOffset
          );
        }
        if (scrollRatio <= 0.4) {
          objs.firstB.current.style.opacity = calcValues(
            newValues.bOpacityIn,
            currentYOffset
          );
          objs.firstB.current.style.transform = `scale(${calcValues(
            newValues.bWidth,
            currentYOffset
          )})`;
        }
        if (scrollRatio <= 0.5) {
          objs.firstC.current.style.opacity = calcValues(
            newValues.cOpacityIn,
            currentYOffset
          );
        }
        if (scrollRatio <= 0.6) {
          objs.firstD.current.style.opacity = calcValues(
            newValues.dOpactiyIn,
            currentYOffset
          );
        } else {
          objs.firstD.current.style.opacity = calcValues(
            newValues.dOpactiyOut,
            currentYOffset
          );
        }
        if (scrollRatio <= 0.7) {
          objs.firstE.current.style.opacity = calcValues(
            newValues.eOpactiyIn,
            currentYOffset
          );
        } else {
          objs.firstE.current.style.opacity = calcValues(
            newValues.eOpactiyOut,
            currentYOffset
          );
        }
        if (scrollRatio <= 0.8) {
          objs.firstF.current.style.opacity = calcValues(
            newValues.fOpactiyIn,
            currentYOffset
          );
        } else {
          objs.firstF.current.style.opacity = calcValues(
            newValues.fOpactiyOut,
            currentYOffset
          );
          objs.firstC.current.style.opacity = calcValues(
            newValues.cOpactiyOut,
            currentYOffset
          );

          objs.firstB.current.style.opacity = 0;
        }
        canvasRef.current.style.display = 'none';
        break;
      case 1:
        canvasRef.current.style.display = 'none';
        break;
      case 2:
        canvasRef.current.style.display = 'block';
        setSequence(
          Math.round(calcValues([0, 84], yOffset - prevScrollHeight))
        );
        if (sequence < 0) {
          return;
        } else if (sequence > 84) {
          return;
        }
        const context = canvasRef.current.getContext('2d');

        context.drawImage(scene[2].objs.videoImages[sequence], 0, 0);
        break;
      case 3:
        canvasRef.current.style.display = 'none';
        break;
    }
  };
  return (
    <MainPageContext.Provider
      value={{
        firstRef,
        secondRef,
        thirdRef,
        scene,
        canvasRef,
        fourthRef,
        firstA,
        firstB,
        firstC,
        firstD,
        firstE,
        firstF,
      }}
    >
      {children}
    </MainPageContext.Provider>
  );
};

export default MainPageContext;

export { MainPageProvider };
export const useGlobalContext = () => {
  return useContext(MainPageContext);
};

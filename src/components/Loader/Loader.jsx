import "./Loader.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 6500);

        return () => clearTimeout(timer);

    }, []);

    const podiumRows = Array.from({ length: 3 });

    const towerRows = Array.from({ length: 8 });

    const windows = Array.from({ length: 6 });

    return (

        <AnimatePresence>

            {

                loading &&

                <motion.div

                    className="loader"

                    initial={{ opacity: 1 }}

                    exit={{

                        opacity: 0,

                        transition: {

                            duration: 1.2

                        }

                    }}

                >

                    {/* Blueprint */}

                    <div className="grid"></div>

                    {/* Glow */}

                    <div className="glow"></div>

                    {/* Building */}

                    <div className="building">

                        {/* Roof */}

                        <motion.div

                            className="roof"

                            initial={{

                                opacity: 0,

                                y: 20

                            }}

                            animate={{

                                opacity: 1,

                                y: 0

                            }}

                            transition={{

                                delay: 4.4,

                                duration: .6

                            }}

                        >

                            <div className="roof-top"></div>

                        </motion.div>

                        {/* Tower */}

                        <div className="tower">

                            {

                                towerRows.map((_, row) => (

                                    <motion.div

                                        className="tower-floor"

                                        key={row}

                                        initial={{

                                            scaleY: 0,

                                            opacity: 0

                                        }}

                                        animate={{

                                            scaleY: 1,

                                            opacity: 1

                                        }}

                                        transition={{

                                            delay: row * .35,

                                            duration: .35

                                        }}

                                    >

                                        {

                                            windows.map((_, i) => (

                                                <motion.span

                                                    className="window"

                                                    key={i}

                                                    initial={{

                                                        opacity: .2

                                                    }}

                                                    animate={{

                                                        opacity: 1

                                                    }}

                                                    transition={{

                                                        delay: 3.8 + row * .08 + i * .05

                                                    }}

                                                />

                                            ))

                                        }

                                    </motion.div>

                                ))

                            }

                        </div>

                        {/* Podium */}

                        <div className="podium">

                            {

                                podiumRows.map((_, row) => (

                                    <motion.div

                                        className="podium-floor"

                                        key={row}

                                        initial={{

                                            scaleY: 0,

                                            opacity: 0

                                        }}

                                        animate={{

                                            scaleY: 1,

                                            opacity: 1

                                        }}

                                        transition={{

                                            delay: 2.8 + row * .35

                                        }}

                                    >

                                        {

                                            Array.from({ length: 10 }).map((_, i) => (

                                                <motion.span

                                                    className="window"

                                                    key={i}

                                                    initial={{

                                                        opacity: .2

                                                    }}

                                                    animate={{

                                                        opacity: 1

                                                    }}

                                                    transition={{

                                                        delay: 5 + i * .05

                                                    }}

                                                />

                                            ))

                                        }

                                    </motion.div>

                                ))

                            }

                        </div>

                        {/* Foundation */}

                        <motion.div

                            className="foundation"

                            initial={{

                                scaleX: 0

                            }}

                            animate={{

                                scaleX: 1

                            }}

                            transition={{

                                delay: .3,

                                duration: .7

                            }}

                        />

                    </div>

                    {/* Company */}

                    <motion.div

                        className="company"

                        initial={{

                            opacity: 0,

                            y: 20

                        }}

                        animate={{

                            opacity: 1,

                            y: 0

                        }}

                        transition={{

                            delay: 5.2

                        }}

                    >

                        <h1>

                            NOVIN

                            <span>

                                ENGINEERING

                            </span>

                        </h1>

                        <p>

                            BUILDING THE FUTURE

                        </p>

                    </motion.div>

                </motion.div>

            }

        </AnimatePresence>

    );

}
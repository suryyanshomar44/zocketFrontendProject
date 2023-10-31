import React from "react";

const Stepper = () => {
  let url = window.location.href;
  let step = Number(url.charAt(url.length - 1));

  return (
    <div className="stepper_root">
      <div className="row">
        <div
          className={`col-3 ${
            step > 0 ? `stepper_active` : `stepper_inactive`
          } d-flex justify-content-center align-items-center flex-column`}
        >
          <div
            className={`${
              step > 0 ? `stepper_svg_a` : `stepper_svg_ina`
            }  d-flex justify-content-center align-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
            >
              <path
                fill="#fff"
                d="M17.803 25.667a.73.73 0 01-.221-.035 13.068 13.068 0 00-7.152 0 .814.814 0 01-1.003-.56.805.805 0 01.56-1.004 14.744 14.744 0 018.05 0 .81.81 0 01.56 1.004.844.844 0 01-.794.595zM22.412 7.42c-1.214-2.45-3.559-4.258-6.277-4.853-2.847-.63-5.763.046-7.992 1.843a9.302 9.302 0 00-3.511 7.315c0 3.022 1.808 6.183 4.538 8.015v.968c-.012.327-.023.829.373 1.237.409.42 1.015.467 1.494.467h5.985c.63 0 1.108-.175 1.435-.502.443-.455.431-1.038.42-1.353v-.817c3.616-2.438 5.891-7.583 3.535-12.32zm-6.405 6.137l-1.249 2.17a.882.882 0 01-.758.443.8.8 0 01-.432-.117.88.88 0 01-.326-1.19l.991-1.726h-.98c-.583 0-1.061-.257-1.318-.689-.257-.443-.233-.98.058-1.493l1.249-2.17a.88.88 0 011.19-.327.88.88 0 01.326 1.19l-.991 1.727h.98c.583 0 1.061.257 1.318.688.257.444.233.992-.058 1.494z"
              ></path>
            </svg>
          </div>
          <div>What you want to do</div>
        </div>
        <div
          className={`col-3 ${
            step > 1 ? `stepper_active` : `stepper_inactive`
          } d-flex justify-content-center align-items-center flex-column`}
        >
          <div
            className={`${
              step > 1 ? `stepper_svg_a` : `stepper_svg_ina`
            }  d-flex justify-content-center align-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                fill="#fff"
                d="M4.541 5.583a.671.671 0 01-.464-.193.66.66 0 010-.927l3.177-3.177a.66.66 0 01.927 0 .66.66 0 010 .928L5.005 5.39a.687.687 0 01-.464.193zM16.459 5.583a.649.649 0 01-.464-.193l-3.176-3.176a.66.66 0 010-.928.66.66 0 01.927 0l3.176 3.177a.66.66 0 010 .927.671.671 0 01-.463.193z"
              ></path>
              <path
                fill="#fff"
                d="M17.684 9.275H3.5c-.612.009-1.313.009-1.82-.499-.402-.394-.586-1.006-.586-1.907 0-2.407 1.758-2.407 2.598-2.407h13.616c.84 0 2.598 0 2.598 2.407 0 .91-.183 1.513-.586 1.907-.455.455-1.067.499-1.636.499zM3.692 7.962H17.51c.393.01.761.01.883-.113.062-.062.193-.272.193-.98 0-.99-.245-1.094-1.286-1.094H3.692c-1.04 0-1.286.105-1.286 1.094 0 .708.14.918.193.98.122.113.498.113.883.113h.21zM8.54 16.012a.661.661 0 01-.656-.656V12.25c0-.359.297-.656.656-.656.359 0 .656.297.656.656v3.106a.655.655 0 01-.656.656zM12.565 16.012a.661.661 0 01-.656-.656V12.25a.66.66 0 01.656-.656c.359 0 .656.297.656.656v3.106a.655.655 0 01-.656.656z"
              ></path>
              <path
                fill="#fff"
                d="M13.029 19.906H7.753c-3.133 0-3.833-1.864-4.104-3.482l-1.234-7.57a.654.654 0 01.542-.752.654.654 0 01.753.543l1.234 7.56c.253 1.549.779 2.389 2.809 2.389h5.276c2.248 0 2.502-.788 2.791-2.31l1.47-7.657a.645.645 0 01.77-.516c.359.07.586.411.516.77l-1.47 7.656c-.341 1.777-.91 3.37-4.077 3.37z"
              ></path>
            </svg>
          </div>
          <div>Choose Product</div>
        </div>
        <div
          className={`col-3 ${
            step > 2 ? `stepper_active` : `stepper_inactive`
          } d-flex justify-content-center align-items-center flex-column`}
        >
          <div
            className={`${
              step > 2 ? `stepper_svg_a` : `stepper_svg_ina`
            }  d-flex justify-content-center align-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#fff"
              viewBox="0 0 22 22"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M16.958 2.986h2.105c1.163 0 2.106.943 2.106 2.106v14.036a2.106 2.106 0 01-2.106 2.106H2.22a2.106 2.106 0 01-2.106-2.106V5.092c0-1.163.943-2.106 2.106-2.106h2.105V.18h1.404v2.807h9.825V.18h1.404v2.807zm-8.422 8.422H4.325v-1.403h4.211v1.403zm8.422-1.403h-4.211v1.403h4.21v-1.403zm-8.422 5.614H4.325v-1.403h4.211v1.403zm4.211 0h4.21v-1.403h-4.21v1.403z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>Campign Settings</div>
        </div>
        <div
          className={`col-3 ${
            step > 3 ? `stepper_active` : `stepper_inactive`
          } d-flex justify-content-center align-items-center flex-column`}
        >
          <div
            className={`${
              step > 3 ? `stepper_svg_a` : `stepper_svg_ina`
            }  d-flex justify-content-center align-items-center`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M.607 12.284C.607 5.835 5.835.607 12.284.607c6.45 0 11.677 5.228 11.677 11.677 0 6.45-5.228 11.677-11.677 11.677-6.45 0-11.677-5.228-11.677-11.677zm11.01 4.999l6.724-8.405-1.216-.973-5.731 7.165-4.06-3.384-.998 1.196 5.281 4.401z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div>Ready to go</div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;

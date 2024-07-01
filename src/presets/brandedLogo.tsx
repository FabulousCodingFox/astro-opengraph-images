import React from "react";
import type { RenderFunctionInput } from "../types.js";

// from https://fullstackheroes.com/resources/vercel-og-templates/branded-logo/
export async function brandedLogo({ title }: RenderFunctionInput): Promise<React.ReactNode> {
  const twj = (await import("tw-to-css")).twj;

  return (
    <div
      style={{
        ...twj("h-full w-full flex items-start justify-start"),
        ...{
          backgroundImage: "linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        },
      }}
    >
      <div style={twj("flex items-start justify-start h-full")}>
        <div style={twj("flex flex-col justify-between w-full h-full p-20")}>
          {/* Replace with your own logo */}
          <svg width="192" height="50" viewBox="0 0 96 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M31.6432 7.11014H32.2382C32.6443 7.11014 32.9734 7.4393 32.9734 7.84533V8.54143C32.9734 8.56301 32.9909 8.58051 33.0125 8.58051C33.3512 7.98147 33.8071 7.54581 34.3802 7.27352C34.9534 7.00123 35.5721 6.86508 36.2365 6.86508C36.9529 6.86508 37.5977 6.99782 38.1708 7.26331C38.744 7.52879 39.2325 7.89298 39.6363 8.35587C40.0401 8.81877 40.3462 9.36334 40.5546 9.98961C40.763 10.6159 40.8672 11.2898 40.8672 12.0114C40.8672 12.7329 40.7565 13.4068 40.5351 14.0331C40.3136 14.6594 40.0043 15.204 39.607 15.6669C39.2097 16.1297 38.731 16.4939 38.1708 16.7594C37.6107 17.0249 36.9985 17.1576 36.3342 17.1576C35.8913 17.1576 35.5005 17.11 35.1618 17.0147C34.8231 16.9194 34.5235 16.7969 34.263 16.6471C34.0025 16.4973 33.781 16.3374 33.5987 16.1672C33.4163 15.997 33.2665 15.8302 33.1493 15.6669C33.1169 15.6669 33.0907 15.6931 33.0907 15.7255V20.6715C33.0907 21.167 32.689 21.5687 32.1934 21.5687H31.6432C31.1477 21.5687 30.746 21.167 30.746 20.6715V8.00738C30.746 7.51185 31.1477 7.11014 31.6432 7.11014ZM38.5225 12.0114C38.5225 11.6302 38.4607 11.2626 38.3369 10.9086C38.2132 10.5546 38.0308 10.2415 37.7898 9.96919C37.5488 9.6969 37.259 9.47907 36.9203 9.31569C36.5817 9.15232 36.1974 9.07063 35.7675 9.07063C35.3377 9.07063 34.9534 9.15232 34.6147 9.31569C34.276 9.47907 33.9862 9.6969 33.7452 9.96919C33.5042 10.2415 33.3219 10.5546 33.1981 10.9086C33.0744 11.2626 33.0125 11.6302 33.0125 12.0114C33.0125 12.3926 33.0744 12.7602 33.1981 13.1141C33.3219 13.4681 33.5042 13.7812 33.7452 14.0535C33.9862 14.3258 34.276 14.5437 34.6147 14.707C34.9534 14.8704 35.3377 14.9521 35.7675 14.9521C36.1974 14.9521 36.5817 14.8704 36.9203 14.707C37.259 14.5437 37.5488 14.3258 37.7898 14.0535C38.0308 13.7812 38.2132 13.4681 38.3369 13.1141C38.4607 12.7602 38.5225 12.3926 38.5225 12.0114ZM44.2459 7.11014H44.9174C45.346 7.11014 45.6934 7.45758 45.6934 7.88617V8.62312C45.6934 8.6447 45.7109 8.6622 45.7325 8.6622C45.993 8.09038 46.3642 7.64792 46.8462 7.33478C47.3282 7.02165 47.8818 6.86508 48.507 6.86508C48.6503 6.86508 48.7903 6.8787 48.9271 6.90593C49.1713 6.95455 49.3472 7.16889 49.3472 7.41789V8.7624C49.3472 9.03279 49.128 9.25198 48.8576 9.25198C48.8285 9.25198 48.7995 9.24938 48.7708 9.24422C48.5819 9.21018 48.3963 9.19316 48.2139 9.19316C47.6668 9.19316 47.2272 9.29867 46.895 9.5097C46.5629 9.72072 46.3089 9.96238 46.133 10.2347C45.9572 10.507 45.8399 10.7792 45.7813 11.0515C45.7227 11.3238 45.6934 11.528 45.6934 11.6642V16.0153C45.6934 16.5109 45.2917 16.9126 44.7962 16.9126H44.2459C43.7504 16.9126 43.3487 16.5109 43.3487 16.0153V8.00738C43.3487 7.51185 43.7504 7.11014 44.2459 7.11014ZM52.1788 7.11014H52.729C53.2246 7.11014 53.6263 7.51185 53.6263 8.00738V16.0153C53.6263 16.5109 53.2246 16.9126 52.729 16.9126H52.1788C51.6833 16.9126 51.2816 16.5109 51.2816 16.0153V8.00738C51.2816 7.51185 51.6833 7.11014 52.1788 7.11014ZM50.9494 3.7814C50.9494 3.38658 51.0894 3.04282 51.3695 2.7501C51.6496 2.45739 52.0045 2.31104 52.4344 2.31104C52.8643 2.31104 53.2257 2.45058 53.5188 2.72968C53.8119 3.00878 53.9584 3.35935 53.9584 3.7814C53.9584 4.20345 53.8119 4.55402 53.5188 4.83312C53.2257 5.11222 52.8643 5.25177 52.4344 5.25177C52.0045 5.25177 51.6496 5.10541 51.3695 4.8127C51.0894 4.51999 50.9494 4.17622 50.9494 3.7814ZM61.0512 9.35027C60.5755 9.00047 60.1521 8.82557 59.7811 8.82557C59.4685 8.82557 59.1624 8.90726 58.8628 9.07063C58.5632 9.23401 58.4134 9.49949 58.4134 9.86708C58.4134 10.1666 58.5371 10.3844 58.7846 10.5206C59.0321 10.6567 59.3447 10.7724 59.7225 10.8677C60.1002 10.963 60.5073 11.0618 60.9437 11.1639C61.38 11.266 61.7871 11.4225 62.1649 11.6336C62.5426 11.8446 62.8552 12.1339 63.1027 12.5015C63.3502 12.8691 63.474 13.3728 63.474 14.0127C63.474 14.5981 63.3535 15.0916 63.1125 15.4933C62.8715 15.8949 62.5589 16.2182 62.1746 16.4633C61.7904 16.7084 61.3573 16.8853 60.8753 16.9943C60.3933 17.1032 59.9114 17.1576 59.4294 17.1576C58.6999 17.1576 58.0291 17.0487 57.4169 16.8309C57.1771 16.7456 56.8894 16.5742 56.5538 16.3166C56.1607 16.015 56.0866 15.4517 56.3882 15.0586C56.4139 15.0251 56.4419 14.9935 56.4721 14.964L56.7153 14.7257C57.0509 14.3968 57.5835 14.3826 57.9361 14.6931C58.0783 14.8183 58.2016 14.9149 58.3059 14.9827C58.6511 15.2074 59.0712 15.3197 59.5662 15.3197C59.7355 15.3197 59.9114 15.2993 60.0937 15.2584C60.2761 15.2176 60.4454 15.1495 60.6017 15.0542C60.7581 14.9589 60.8851 14.8398 60.9828 14.6968C61.0804 14.5539 61.1293 14.3871 61.1293 14.1965C61.1293 13.8561 61.0055 13.6043 60.758 13.4409C60.5106 13.2775 60.1979 13.1448 59.8202 13.0427C59.4424 12.9406 59.0354 12.8453 58.599 12.7568C58.1626 12.6683 57.7555 12.5253 57.3778 12.3279C57 12.1305 56.6874 11.8548 56.4399 11.5008C56.1924 11.1468 56.0687 10.6567 56.0687 10.0305C56.0687 9.48587 56.1761 9.01277 56.3911 8.61114C56.606 8.20951 56.8893 7.87936 57.241 7.62069C57.5927 7.36201 57.9965 7.17141 58.4524 7.04888C58.9083 6.92635 59.3708 6.86508 59.8397 6.86508C60.465 6.86508 61.0837 6.9774 61.6959 7.20204C61.9176 7.28338 62.1649 7.434 62.4378 7.65391C62.8237 7.96481 62.8845 8.52965 62.5736 8.91551C62.5477 8.9476 62.5197 8.97787 62.4896 9.0061L62.1975 9.28094C61.8821 9.57755 61.4 9.60671 61.0512 9.35027ZM66.3837 7.11014H66.8167C67.3123 7.11014 67.714 7.51185 67.714 8.00738V8.64177C67.9615 8.17888 68.2969 7.76705 68.7593 7.40626C69.2217 7.04547 69.8437 6.86508 70.6253 6.86508C72.0973 6.86508 73.0742 7.47092 73.5562 8.68262C73.8948 8.05635 74.3182 7.59686 74.8262 7.30415C75.3342 7.01144 75.9399 6.86508 76.6433 6.86508C77.2686 6.86508 77.7962 6.974 78.226 7.19183C78.6559 7.40966 79.0043 7.70918 79.2714 8.09039C79.5384 8.4716 79.7305 8.91747 79.8478 9.42801C79.965 9.93856 80.0236 10.4865 80.0236 11.072V16.0153C80.0236 16.5109 79.6219 16.9126 79.1264 16.9126H78.5762C78.0806 16.9126 77.6789 16.5109 77.6789 16.0153V11.3579C77.6789 11.0583 77.6529 10.769 77.6008 10.4899C77.5487 10.2108 77.4575 9.96579 77.3272 9.75476C77.197 9.54373 77.0211 9.37696 76.7997 9.25443C76.5782 9.1319 76.2916 9.07063 75.9399 9.07063C75.5752 9.07063 75.2658 9.14211 75.0118 9.28506C74.7578 9.42801 74.5494 9.61861 74.3866 9.85687C74.2238 10.0951 74.1065 10.3674 74.0349 10.6737C73.9632 10.9801 73.9274 11.2898 73.9274 11.6029V16.0153C73.9274 16.5109 73.5257 16.9126 73.0302 16.9126H72.48C71.9844 16.9126 71.5827 16.5109 71.5827 16.0153V11.072C71.5827 10.4593 71.459 9.97259 71.2115 9.61181C70.964 9.25102 70.5537 9.07063 69.9805 9.07063C69.5897 9.07063 69.2608 9.1387 68.9938 9.27485C68.7267 9.41099 68.5053 9.59479 68.3295 9.82624C68.1536 10.0577 68.0266 10.3232 67.9484 10.6227C67.8703 10.9222 67.8312 11.2353 67.8312 11.5621V16.0153C67.8312 16.5109 67.4295 16.9126 66.934 16.9126H66.3837C65.8882 16.9126 65.4865 16.5109 65.4865 16.0153V8.00738C65.4865 7.51185 65.8882 7.11014 66.3837 7.11014ZM83.8126 7.11014H84.3629C84.8584 7.11014 85.2601 7.51185 85.2601 8.00738V16.0153C85.2601 16.5109 84.8584 16.9126 84.3629 16.9126H83.8126C83.3171 16.9126 82.9154 16.5109 82.9154 16.0153V8.00738C82.9154 7.51185 83.3171 7.11014 83.8126 7.11014ZM82.5832 3.7814C82.5832 3.38658 82.7233 3.04282 83.0033 2.7501C83.2834 2.45739 83.6383 2.31104 84.0682 2.31104C84.4981 2.31104 84.8595 2.45058 85.1526 2.72968C85.4457 3.00878 85.5923 3.35935 85.5923 3.7814C85.5923 4.20345 85.4457 4.55402 85.1526 4.83312C84.8595 5.11222 84.4981 5.25177 84.0682 5.25177C83.6383 5.25177 83.2834 5.10541 83.0033 4.8127C82.7233 4.51999 82.5832 4.17622 82.5832 3.7814ZM94.0532 9.51422C93.9567 9.43871 93.8719 9.37934 93.7987 9.33611C93.4991 9.15913 93.193 9.07063 92.8803 9.07063C92.4505 9.07063 92.0662 9.15232 91.7275 9.31569C91.3889 9.47907 91.099 9.6969 90.8581 9.96919C90.6171 10.2415 90.4347 10.5546 90.311 10.9086C90.1872 11.2626 90.1253 11.6302 90.1253 12.0114C90.1253 12.3926 90.1872 12.7602 90.311 13.1141C90.4347 13.4681 90.6171 13.7812 90.8581 14.0535C91.099 14.3258 91.3889 14.5437 91.7275 14.707C92.0662 14.8704 92.4505 14.9521 92.8803 14.9521C93.2451 14.9521 93.5838 14.8738 93.8964 14.7172C93.9596 14.6856 94.0282 14.6426 94.1022 14.5881C94.4753 14.3138 94.996 14.3685 95.3039 14.7145L95.6603 15.1149C95.974 15.4673 95.9426 16.0073 95.5901 16.321C95.5469 16.3595 95.4998 16.3935 95.4497 16.4225C95.1436 16.5994 94.8343 16.7424 94.5216 16.8513C94.209 16.9602 93.9094 17.0385 93.6228 17.0862C93.3363 17.1338 93.0888 17.1576 92.8803 17.1576C92.1769 17.1576 91.5126 17.0351 90.8874 16.79C90.2621 16.545 89.7215 16.1978 89.2656 15.7485C88.8097 15.2993 88.4482 14.7581 88.1812 14.125C87.9142 13.4919 87.7806 12.7874 87.7806 12.0114C87.7806 11.2353 87.9142 10.5308 88.1812 9.89771C88.4482 9.26464 88.8097 8.72346 89.2656 8.27418C89.7215 7.8249 90.2621 7.47774 90.8874 7.23267C91.5126 6.98761 92.1769 6.86508 92.8803 6.86508C93.4796 6.86508 94.082 6.98421 94.6877 7.22246C94.9185 7.31326 95.1909 7.4756 95.5047 7.70949C95.902 8.0056 95.9841 8.56775 95.6879 8.96507C95.666 8.99453 95.6422 9.02262 95.6168 9.04917L95.2544 9.42792C94.9357 9.76108 94.4163 9.79839 94.0532 9.51422Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M24.3337 12.8316L22.5159 11.0098C22.3718 10.8654 22.2909 10.6697 22.2909 10.4657V8.23587C22.2909 6.17564 22.0769 5.42855 21.6749 4.67536C21.273 3.92217 20.6831 3.33106 19.9316 2.92825C19.18 2.52544 18.4345 2.31092 16.3787 2.31092H13.4385C13.3534 2.31092 13.2844 2.24195 13.2844 2.15686C13.2844 2.11606 13.3006 2.07693 13.3294 2.04804L15.1473 0.226205C15.2918 0.0813851 15.488 0 15.6926 0H16.7139C19.455 0 20.449 0.286017 21.4511 0.823098C22.4532 1.36018 23.2396 2.14832 23.7755 3.15258C24.3115 4.15683 24.5969 5.15295 24.5969 7.89993V12.7227C24.5969 12.8078 24.5279 12.8768 24.4428 12.8768C24.4019 12.8768 24.3626 12.8605 24.3337 12.8316Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7921 24.3873L13.61 22.5654C13.7545 22.4206 13.9507 22.3392 14.1553 22.3392H16.3787C18.4345 22.3392 19.18 22.1247 19.9315 21.7219C20.6831 21.3191 21.2729 20.728 21.6749 19.9748C22.0768 19.2216 22.2909 18.4745 22.2909 16.4143V13.468C22.2909 13.3829 22.3599 13.314 22.4449 13.314C22.4859 13.314 22.5251 13.3302 22.554 13.3592L24.3718 15.1809C24.5159 15.3253 24.5968 15.521 24.5968 15.725V16.7502C24.5968 19.4972 24.3114 20.4933 23.7755 21.4976C23.2396 22.5018 22.4531 23.29 21.451 23.8271C20.4489 24.3641 19.455 24.6502 16.7139 24.6502H11.9011C11.816 24.6502 11.7471 24.5812 11.7471 24.4961C11.7471 24.4553 11.7633 24.4162 11.7921 24.3873Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.263117 11.8184L2.08092 13.6402C2.22503 13.7846 2.30596 13.9803 2.30596 14.1843V16.4141C2.30596 18.4744 2.52001 19.2214 2.92195 19.9746C3.3239 20.7278 3.91373 21.3189 4.6653 21.7217C5.41688 22.1246 6.16236 22.3391 8.21816 22.3391H11.1584C11.2435 22.3391 11.3125 22.408 11.3125 22.4931C11.3125 22.5339 11.2963 22.5731 11.2675 22.6019L9.44954 24.4238C9.30503 24.5686 9.10885 24.65 8.90427 24.65H7.88294C5.14187 24.65 4.14789 24.364 3.1458 23.8269C2.1437 23.2898 1.35725 22.5017 0.821328 21.4974C0.285402 20.4932 0 19.497 0 16.7501V11.9273C0 11.8422 0.0689758 11.7732 0.154062 11.7732C0.194979 11.7732 0.234215 11.7895 0.263117 11.8184Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.8048 0.262883L10.9868 2.08472C10.8423 2.22954 10.6462 2.31093 10.4416 2.31093H8.21816C6.16236 2.31093 5.41687 2.52544 4.6653 2.92825C3.91373 3.33106 3.3239 3.92217 2.92195 4.67536C2.52001 5.42855 2.30596 6.17565 2.30596 8.23588V11.1821C2.30596 11.2672 2.23698 11.3362 2.15189 11.3362C2.11098 11.3362 2.07174 11.3199 2.04284 11.291L0.225032 9.46923C0.0809298 9.32482 0 9.12914 0 8.92512V7.89994C0 5.15296 0.285402 4.15684 0.821328 3.15258C1.35725 2.14833 2.1437 1.36018 3.1458 0.823099C4.14789 0.286018 5.14187 0 7.88294 0H12.6957C12.7808 0 12.8498 0.0689758 12.8498 0.154062C12.8498 0.194864 12.8336 0.234 12.8048 0.262883Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.493 8.99386L18.0142 6.61966C17.8502 6.45535 17.6584 6.33591 17.454 6.26134C17.285 6.1973 17.1018 6.16224 16.9104 6.16224H9.59351C9.50843 6.16224 9.43945 6.09327 9.43945 6.00818C9.43945 5.96736 9.45566 5.9282 9.4845 5.89932L11.3041 4.07729C11.4486 3.93261 11.6447 3.85132 11.8492 3.85132H17.679C19.3771 3.85132 20.7536 5.23083 20.7536 6.93255V8.88259C20.7536 8.96768 20.6847 9.03666 20.5996 9.03666C20.5599 9.03666 20.5217 9.02132 20.493 8.99386Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.6215 20.5397L17.9913 18.0547C18.1553 17.8904 18.2745 17.6982 18.3489 17.4933C18.4128 17.3239 18.4477 17.1403 18.4477 16.9485V9.61622C18.4477 9.53113 18.5167 9.46216 18.6018 9.46216C18.6427 9.46216 18.682 9.47845 18.7109 9.50745L20.5289 11.3309C20.6729 11.4753 20.7537 11.6709 20.7537 11.8748V17.7188C20.7537 19.4206 19.3772 20.8001 17.6791 20.8001H15.733C15.6479 20.8001 15.5789 20.7311 15.5789 20.646C15.5789 20.6064 15.5941 20.5683 15.6215 20.5397Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.10401 15.6561L6.58286 18.0303C6.74682 18.1946 6.93861 18.314 7.14302 18.3886C7.31203 18.4526 7.49525 18.4877 7.68665 18.4877H15.0035C15.0886 18.4877 15.1576 18.5567 15.1576 18.6418C15.1576 18.6826 15.1414 18.7217 15.1125 18.7506L13.2929 20.5726C13.1484 20.7173 12.9523 20.7986 12.7478 20.7986H6.91799C5.21993 20.7986 3.84338 19.4191 3.84338 17.7174V15.7673C3.84338 15.6823 3.91236 15.6133 3.99745 15.6133C4.03716 15.6133 4.07533 15.6286 4.10401 15.6561Z"
              fill="#FFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.97563 4.1117L6.60577 6.5967C6.44181 6.76101 6.32263 6.95321 6.24823 7.15806C6.18432 7.32744 6.14934 7.51106 6.14934 7.70286V15.0352C6.14934 15.1203 6.08036 15.1892 5.99528 15.1892C5.95434 15.1892 5.91508 15.1729 5.88618 15.1439L4.06819 13.3205C3.92422 13.1761 3.84338 12.9805 3.84338 12.7766V6.93255C3.84338 5.23083 5.21993 3.85132 6.91799 3.85132H8.86414C8.94922 3.85132 9.0182 3.92029 9.0182 4.00538C9.0182 4.04498 9.00295 4.08305 8.97563 4.1117Z"
              fill="#FFF"
            />
          </svg>

          <h1 style={twj("text-[60px] text-white font-bold text-left")}>{title}</h1>
        </div>
      </div>
    </div>
  );
}

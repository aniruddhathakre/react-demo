import React from "react";

function Card({ username = "Manu" }) {
  return (
    <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-yellow-800">
      <img
        class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src="https://images.pexels.com/photos/32087013/pexels-photo-32087013/free-photo-of-contemplative-woman-leaning-on-disco-ball.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width="384"
        height="512"
      />
      <div class="pt-6 md:p-8 text-center md:text-left space-y-4 bg-gray-500">
        <blockquote>
          <p class="text-lg font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            illum cumque quibusdam suscipit enim laboriosam similique aliquid
            maiores rem dolorem.
          </p>
        </blockquote>
        <figcaption class="font-medium">
          <div class="text-sky-500 dark:text-sky-400">{username}</div>
          <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default Card;

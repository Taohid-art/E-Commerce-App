"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ------------------ CONSTANTS ------------------ */

const categoryOptions = [
  "All",
  "Electronics",
  "Cloths",
  "Furnitures",
  "Toys",
  "Others",
] as const;

const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
] as const;

const colors = [
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Black",
  "White",
  "Orange",
  "Purple",
  "Pink",
  "Gray",
  "Brown",
  "Silver",
  "Gold",
  "Beige",
  "Cyan",
  
] as const;

/* ------------------ SCHEMA ------------------ */

const formSchema = z.object({
  productName: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be positive"),
  category: z.enum(categoryOptions),

  size: z.array(z.enum(sizes)).min(1, "Select at least one size"),
  color: z.array(z.enum(colors)).min(1, "Select at least one color"),

  // images[color] = image URL
  images: z.record(z.enum(colors),z.string().url("Valid image URL required")),
});

type FormData = z.infer<typeof formSchema>;

/* ------------------ COMPONENT ------------------ */

const AddproductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: [],
      color: [],
      images: {},
    },
  });

  const selectedColors = watch("color") || [];

  const onSubmit = (data: FormData) => {
    console.log("FORM DATA 👉", data);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* ---------------- PRODUCT NAME ---------------- */}
        <div>
          <label className="font-medium">Product Name</label>
          <input
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Nike Shoe"
            {...register("productName")}
          />
          {errors.productName && (
            <p className="text-red-500 text-sm">
              {errors.productName.message}
            </p>
          )}
        </div>

        {/* ---------------- DESCRIPTION ---------------- */}
        <div>
          <label className="font-medium">Description</label>
          <input
            className="w-full border rounded-md p-2 mt-1"
            placeholder="Very comfortable shoe"
            {...register("description")}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* ---------------- PRICE ---------------- */}
        <div>
          <label className="font-medium">Price</label>
          <input
            type="number"
            className="w-full border rounded-md p-2 mt-1"
            placeholder="300"
            {...register("price")}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">
              {errors.price.message}
            </p>
          )}
        </div>

        {/* ---------------- CATEGORY ---------------- */}
        <div>
          <label className="font-medium">Category</label>
          <select
            className="w-full border rounded-md p-2 mt-1"
            {...register("category")}
          >
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* ---------------- SIZE ---------------- */}
        <div>
          <label className="font-medium">Select Size</label>
          <div className="grid grid-cols-4 gap-3 mt-2">
            {sizes.map((s) => (
              <label
                key={s}
                className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer"
              >
                <input type="checkbox" value={s} {...register("size")} />
                {s}
              </label>
            ))}
          </div>
          {errors.size && (
            <p className="text-red-500 text-sm">{errors.size.message}</p>
          )}
        </div>

        {/* ---------------- COLOR ---------------- */}
        <div>
          <label className="font-medium">Select Color</label>
          <div className="grid grid-cols-3 gap-3 mt-2">
            {colors.map((c) => (
              <label
                key={c}
                className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer"
              >
                <input type="checkbox" value={c} {...register("color")} />
                <span
                  className="w-4 h-4 rounded-full border"
                  style={{ backgroundColor: c.toLowerCase() }}
                />
                {c}
              </label>
            ))}
          </div>
          {errors.color && (
            <p className="text-red-500 text-sm">{errors.color.message}</p>
          )}
        </div>

        {/* ---------------- IMAGES PER COLOR ---------------- */}
        {selectedColors.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              Upload Images Per Color
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {selectedColors.map((clr) => (
                <div
                  key={clr}
                  className="border rounded-md p-3 space-y-2"
                >
                  <label className="flex items-center gap-2 font-medium">
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{ backgroundColor: clr.toLowerCase() }}
                    />
                    {clr} Image URL
                  </label>

                  <input
                    type="file"
                    className="w-full border rounded-md p-2"
                    placeholder={`Image URL for ${clr}`}
                    {...register(`images.${clr}`)}
                  />

                  {errors.images?.[clr] && (
                    <p className="text-red-500 text-sm">
                      {errors.images[clr]?.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------------- SUBMIT ---------------- */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddproductForm;

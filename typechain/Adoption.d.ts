/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AdoptionInterface extends ethers.utils.Interface {
  functions: {
    "adoptAPet(string)": FunctionFragment;
    "claimAward()": FunctionFragment;
    "donate()": FunctionFragment;
    "getPetOwner(string)": FunctionFragment;
    "getPetOwners()": FunctionFragment;
    "numberOfRemainingAwardsByAdopter(address)": FunctionFragment;
    "petToAdopter(string)": FunctionFragment;
    "pets(uint256)": FunctionFragment;
    "sendPetToBeAdopted(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "adoptAPet", values: [string]): string;
  encodeFunctionData(
    functionFragment: "claimAward",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "donate", values?: undefined): string;
  encodeFunctionData(functionFragment: "getPetOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getPetOwners",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfRemainingAwardsByAdopter",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "petToAdopter",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "pets", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "sendPetToBeAdopted",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "adoptAPet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimAward", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "donate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPetOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPetOwners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfRemainingAwardsByAdopter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "petToAdopter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendPetToBeAdopted",
    data: BytesLike
  ): Result;

  events: {};
}

export class Adoption extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AdoptionInterface;

  functions: {
    adoptAPet(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimAward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPetOwner(
      petName: string,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    getPetOwners(
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { _owners: string[] }>;

    numberOfRemainingAwardsByAdopter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    petToAdopter(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    pets(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    sendPetToBeAdopted(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  adoptAPet(
    petName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimAward(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  donate(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPetOwner(petName: string, overrides?: CallOverrides): Promise<string>;

  getPetOwners(
    overrides?: CallOverrides
  ): Promise<[string[], string[]] & { _owners: string[] }>;

  numberOfRemainingAwardsByAdopter(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<number>;

  petToAdopter(arg0: string, overrides?: CallOverrides): Promise<string>;

  pets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  sendPetToBeAdopted(
    petName: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    adoptAPet(petName: string, overrides?: CallOverrides): Promise<void>;

    claimAward(overrides?: CallOverrides): Promise<void>;

    donate(overrides?: CallOverrides): Promise<void>;

    getPetOwner(petName: string, overrides?: CallOverrides): Promise<string>;

    getPetOwners(
      overrides?: CallOverrides
    ): Promise<[string[], string[]] & { _owners: string[] }>;

    numberOfRemainingAwardsByAdopter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<number>;

    petToAdopter(arg0: string, overrides?: CallOverrides): Promise<string>;

    pets(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    sendPetToBeAdopted(
      petName: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    adoptAPet(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimAward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPetOwner(petName: string, overrides?: CallOverrides): Promise<BigNumber>;

    getPetOwners(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfRemainingAwardsByAdopter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    petToAdopter(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    pets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    sendPetToBeAdopted(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adoptAPet(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimAward(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    donate(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPetOwner(
      petName: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPetOwners(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    numberOfRemainingAwardsByAdopter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    petToAdopter(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sendPetToBeAdopted(
      petName: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

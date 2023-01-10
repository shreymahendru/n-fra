import { VpcDetails } from "../vpc/vpc-details";
import { AppConfig } from "./app-config";
import * as Pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
export declare abstract class AppProvisioner<T extends AppConfig> {
    private readonly _name;
    private readonly _vpcDetails;
    private readonly _config;
    private readonly _version;
    protected get name(): string;
    protected get vpcDetails(): VpcDetails;
    protected get config(): T;
    protected get version(): string;
    protected get hasDatadog(): boolean;
    protected constructor(name: string, vpcDetails: VpcDetails, config: T);
    abstract provision(): void;
    protected createExecutionRole(): Pulumi.Output<aws.iam.Role>;
    protected createTaskRole(): Pulumi.Output<aws.iam.Role>;
    protected createAppContainer(): awsx.ecs.Container;
    protected createContainerDefinitions(virtualNode: aws.appmesh.VirtualNode, appContainerOverrides?: Partial<awsx.ecs.Container>): Pulumi.Output<string>;
    private _stringifyContainerDefinitions;
    private _createLogConfiguration;
    private _createAwsLogsConfiguration;
    private _createInstrumentationEnvironmentVariables;
    private _createInstrumentationLabels;
    private _createInstrumentationContainers;
    private _createLogRouterContainer;
    private _createEnvoyContainer;
    private _createDatadogAgentContainer;
    private _createAwsXrayDaemonContainer;
    private _createAwsOtelCollectorContainer;
}
